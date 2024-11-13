function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

const array = [1, 4, 6, 9, 12, 16, 24];
const target = 9;

console.log(binarySearch(array, target)); // 3