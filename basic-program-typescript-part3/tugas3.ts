function removeDuplicates(array: number[]) {
  let dup = [...new Set(array)];
  for (let i = 1; i <= dup.length; i++) {
    if (i == dup.length) {
      return i;
    }
  }
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
// console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6
// console.log(removeDuplicates([2, 2, 2, 11])); // 2
// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
// console.log(removeDuplicates([1, 2, 3, 11, 11])); // 4
