function atm(sum) {
  const banknotes = [5000, 2000, 1000, 500, 200, 100, 50];
  let answer = {};
  let limit = 0;

  if (sum % 50 !== 0) {
    return 'Incorrect value';
  }

  for (let i = 0; i < banknotes.length; i++) {
    if (limit >= 20) {
      return 'Limit exceeded';
    }

    if (Math.floor(sum / banknotes[i]) > 0) {
      limit += Math.floor(sum / banknotes[i]);
      answer[banknotes[i]] = Math.floor(sum / banknotes[i]);
      sum -= Math.floor(sum / banknotes[i]) * banknotes[i];
    }
  }

  if (sum !== 0) {
    return 'Incorrect value';
  }

  return answer;
}

console.log(atm(8350)); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)); // Incorrect value
console.log(atm(100050)); // Limit exceeded
