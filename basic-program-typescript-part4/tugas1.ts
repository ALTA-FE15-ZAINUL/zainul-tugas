function primeX(number: number) {
  let prima = 0;
  loop1: for (let i = 2; i > 1; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue loop1;
      }
    }
    prima = prima + 1;
    if (prima === number) {
      return i;
    }
  }
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71
