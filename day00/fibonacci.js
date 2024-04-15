function fibo(index) {
  return index === 0 || index === 1 ? 1 : fibo(index - 1) + fibo(index - 2);
}

console.log(fibo(5)); // Вернет 8
