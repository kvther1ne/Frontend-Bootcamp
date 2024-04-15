function removeString(message, symbol) {
  let ans = [];
  let iter = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] != symbol) {
      ans[iter] = message[i];
      iter++;
    }
  }
  return ans;
}

console.log(removeString("Большое и интересное сообщение", "о")); // Бльше и интересне сбщение
