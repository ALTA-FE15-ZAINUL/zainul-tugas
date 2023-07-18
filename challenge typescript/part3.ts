function findMinAndMax(arr: number[]): void {
  let min: number = arr[0];
  let max: number = arr[0];
  let minIndex: number = 0;
  let maxIndex: number = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }

    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  console.log("min:", min, "index:", minIndex, "max:", max, "index:", maxIndex);
}

// Contoh penggunaan fungsi

console.log(findMinAndMax([5, 7, 4, -2, -1, 8]));
console.log(findMinAndMax([2, -5, -4, 22, 7, 7]));
console.log(findMinAndMax([4, 3, 9, 4, -21, 7]));
console.log(findMinAndMax([-1, 5, 6, 4, 2, 18]));
console.log(findMinAndMax([-2, 5, -7, 4, 7, -20]));
