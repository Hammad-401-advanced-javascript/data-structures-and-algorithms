'use strict';


const arr = [8, 4, 23, 42, 16, 15];


const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[i] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

insertionSort(arr);