const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { sequelize, MenuItem, Order, User } = require("../../models");

const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

sequelize.sync();

app.get("/signup", async (req, res) => {
  try {
    res.render("signup.hbs");
  } catch (err) {
    return res.status(500).json(err);
  }
})

app.get("/signin", async (req, res) => {
  try {
    res.render("signin.hbs");
  } catch (err) {
    return res.status(500).json(err);
  }
})

// Просмотр всех заказов, с которыми работал сотрудник, по его id
app.get("/", async (req, res) => {
  try {
    res.render("main_page.hbs");
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.get("/get_orders", async (req, res) => {
  try {
    const { UserId } = req.query;

    const orders = await Order.findAll({
      where: { UserId },
    });

    res.render("main_page_second.hbs", {
      order: orders,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Создание заказа с помощью выбора сотрудника и блюд по id
app.get("/orders", async (req, res) => {
  try {
    const users = await User.findAll();
    const items = await MenuItem.findAll();

    res.render("order_create.hbs", {
      users,
      items,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.post("/orders", async (req, res) => {
  try {
    const { Id, Item } = req.body;

    const order = await Order.create({
      UserId: Id,
    });

    await order.addMenuItem(Item);

    res.redirect("/orders/" + order.id);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Информация о заказе по id - перечень блюд и итоговая стоимость
app.get("/orders/:id", async (req, res) => {
  try {
    const OrderId = req.params.id;
    totalAmount = 0;

    const order = await Order.findOne({
      where: { id: OrderId },
      include: MenuItem,
    });

    for (let i = 0; i < order["MenuItems"].length; i++) {
      totalAmount += order["MenuItems"][i]["cost"];
    }

    res.render("order_page.hbs", {
      order: order["MenuItems"],
      totalAmount,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Перечисление блюд из меню
app.get("/menu", async (req, res) => {
  try {
    const menuitem = await MenuItem.findAll();

    res.render("menu.hbs", {
      menuitem,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Изменение заказа
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

// Удаление заказа
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

// Добавление сотрудника
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

app.listen({ port: 3000 }, async () => {
  await sequelize.authenticate();
  console.log("Database connected");
});
