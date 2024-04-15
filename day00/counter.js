function counterPlusThree() {
    let count = 0;
  
    return function() {
      console.log(count);
      count += 3;
    }
  }
  
  let counter = counterPlusThree();
  
  counter(); // Функция вернет 0
  counter(); // Функция вернет 3
  counter(); // Функция вернет 6
  counter(); // Функция вернет 9
