function maxSubArray(array: number[]) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, -5, 6, -2, -3, 1, 5, -6])); // 7
console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSubArray([-2, -5, 6, -2, -3, 1, 6, -6])); // 8
console.log(maxSubArray([-2, -5, 6, 2, -3, 1, 6, -6])); // 12
