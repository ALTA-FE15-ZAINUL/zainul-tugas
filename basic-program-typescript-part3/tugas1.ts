function compareString(a: string, b: string) {
  if (a.toString() < b.toString()) {
    return a;
  }
  if (a.toString() > b.toString()) {
    return b;
  }
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
