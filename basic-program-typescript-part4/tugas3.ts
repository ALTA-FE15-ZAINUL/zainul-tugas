function primeNumber(number: number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function primaSegiEmpat(wide: number, height: number, start: number) {
  let result = "";
  let sum = 0;
  let i = 0;
  let temp = 1;

  while (i < wide * height) {
    if (primeNumber(start + temp)) {
      sum += start + temp;
      result += start + temp;
      i++;
      if (i % wide == 0 && i != 1 && i != 0) {
        result += "\n";
      } else {
        result += " ";
      }
    }
    temp++;
  }
  result += sum.toString();
  return result;
}

// primaSegiEmpat(2, 3, 13);
console.log(primaSegiEmpat(2, 3, 13));

// primaSegiEmpat(2, 3, 13);
/*
  17 19
  23 29
  31 37
  156
  */
// primaSegiEmpat(5, 2, 1);
/*
  2  3  5  7 11
  13 17 19 23 29
  129
  */
