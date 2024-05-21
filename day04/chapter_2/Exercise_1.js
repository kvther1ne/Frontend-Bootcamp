const express = require("express");

const { sequelize, MenuItem, Order, User } = require("../../models");

const app = express();
app.use(express.json());
sequelize.sync();

// Вспомогательный маршрут для добавления блюд в меню
app.post("/MenuItem", async (req, res) => {
  try {
    const { title, picture, cost, callQuantity, description } = req.body;

    const menuitem = await MenuItem.create({
      title,
      picture,
      cost,
      callQuantity,
      description,
    });

    return res.json(menuitem);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Клиент может посмотреть меню и всё, что в него входит
app.get("/menu", async (req, res) => {
  try {
    const menuitem = await MenuItem.findAll();

    return res.json(menuitem);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Создать заказ
app.post("/orders", async (req, res) => {
  try {
    const { MenuItemIds, UserId } = req.body; 

    const order = await Order.create({
      UserId,
    });

    await order.addMenuItems(MenuItemIds);

    const orderRes = await Order.findOne({
      where: { id: order.id },
      include: MenuItem,
    });

    return res.json(orderRes);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Изменить заказ
app.put("/orders/id", async (req, res) => {
  try {
    const { OrderId, NewMenuItemIds } = req.body;

    const order = await Order.findOne({
      where: { id: OrderId },
    });

    await order.setMenuItems(NewMenuItemIds);
    await order.save();

    return res.json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Закрыть заказ
app.delete("/orders/id", async (req, res) => {
  try {
    const { OrderId } = req.body;

    const order = await Order.findOne({
      where: { id: OrderId },
    });

    order.isActive = false;

    await order.save();

    return res.json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Получить все текущие заказы из ресторана
app.get("/orders", async (req, res) => {
  try {
    const order = await Order.findAll({ include: MenuItem });

    return res.json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Возможность добавить нового сотрудника
app.post("/waiters", async (req, res) => {
  try {
    const { name, role } = req.body;

    const user = await User.create({
      name,
      role,
    });

    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen({ port: 5000 }, async () => {
  await sequelize.authenticate();
  console.log("Database connected");
});

