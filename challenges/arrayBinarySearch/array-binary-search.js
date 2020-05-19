

'use strict';

function BinarySearch(arr,key){
  
  let score ;

  for(let i=0 ; i<arr.length;i++){
    if(arr[i] === key) {
      score = i;
      break;
    } else {
      score = -1;
    }
  }
  return score;
}
module.exports = BinarySearch;