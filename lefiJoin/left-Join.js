'use strict';

function left_join(hashOne, hashTwo) {
  let output = [];

  for (const key in hashOne) {
    let arr = [];
    arr.push(key, hashOne[key]);

    if (hashTwo[key]) {
      arr.push(hashTwo[key]);
    }
    else {
      arr.push(null);
    }

    output.push(arr);
  }

  return output;
}

module.exports = left_join;