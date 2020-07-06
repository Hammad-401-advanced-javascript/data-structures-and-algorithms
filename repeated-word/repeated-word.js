'use strict';

module.exports = function repeatedString(str) {

  let word = str.toLowerCase().split(' ');

  for (let i = 0; i < word.length; i++) {
    let k = i;
    while (k < word.length) {
      k++;
      if (word[i] === word[k] && word[i] !== '') {
        return word[i];
      }
    }
  }
  return 'no repeated words';

};