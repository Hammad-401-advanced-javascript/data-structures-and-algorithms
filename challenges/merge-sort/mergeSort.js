'use strict';

const mergeSort = function (array) {

  // return if length is 1 or below
  if (array.length <= 1) {
    return array;
  }

  //   get mid point 
  let mid = Math.floor(array.length / 2);

  //  split up the array in 2 halfs recursively
  const a = mergeSort(array.slice(0, mid));
  const b = mergeSort(array.slice(mid));

  // array for the result
  let result = [];

  // indexes that we will iterate 
  let indexA = 0;
  let indexB = 0;

  while (indexA < a.length && indexB < b.length) {
    let elementA = a[indexA];
    let elementB = b[indexB];
    // push smaller value and increment index of the array
    if (elementA <= elementB) {
      result.push(elementA);
      indexA += 1;
    } else {
      result.push(elementB);
      indexB += 1;
    }
  }

  // push rest of values to the result array
  while (indexA < a.length) {
    result.push(a[indexA]);
    indexA += 1;
  }
  while (indexB < b.length) {
    result.push(b[indexB]);
    indexB += 1;
  }

  return result;


};

console.log(mergeSort([8, 4, 23, 42, 16, 15]));

