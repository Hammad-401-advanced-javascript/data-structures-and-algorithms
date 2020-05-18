
  
'use strict';

function insertShiftArray(arr,val){

  let index =Math.ceil(arr.length/2);
  let newArr = [];
  for(let i=0;i<arr.length+1;i++){
    if(i == index){
      newArr[i] = val;
    }
    else if(i> index){
      newArr[i]=arr[i-1];
    }
    else{
      newArr[i] = arr[i];
  
    }
        
  }
  return newArr;
}


   
    