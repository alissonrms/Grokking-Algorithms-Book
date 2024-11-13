function findBiggest(arr) {
  let biggestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].plays > arr[biggestIndex].plays) {
      biggestIndex = i;
    }
  }
  return biggestIndex;
}

function selectionSort(arr) {
  const sortedArr = [];
  const originalArr = [...arr]; 

  while (originalArr.length > 0) {
    const biggestIndex = findBiggest(originalArr);
    sortedArr.push(originalArr[biggestIndex]);
    originalArr.splice(biggestIndex, 1);
  }

  return sortedArr;
}

const artists = [
  { name: 'Radiohead', plays: 156 },
  { name: 'Kishore Kumar', plays: 141 },
  { name: 'The Black Keys', plays: 35 },
  { name: 'Neutral Milk Hotel', plays: 94 },
  { name: 'Beck', plays: 88 },
  { name: 'The Strokes', plays: 61 },
  { name: 'Wilco', plays: 111 },
];

console.log(selectionSort(artists));