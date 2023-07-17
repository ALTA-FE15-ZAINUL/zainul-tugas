function primeNumber(number: number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "false";
    }
  }
  if (number > 1) {
    return "true";
  }
}

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false
