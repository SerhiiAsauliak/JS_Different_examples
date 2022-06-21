"use strict";

let arr = [8, 2, 3, 12, 4, 7];
let counter = 0;
function sortFunc(arr){
for (let i = 0; i < arr.length-1; i++) {
   let isSort = false;
   for (let j = 0; j < arr.length-1-i; j++) {
      counter++;
      if(arr[j] > arr[j+1]){  
         let temp = arr[j+1];
         arr[j+1] = arr[j];
         arr[j] = temp;
         isSort = true;
      }
   }
   if(isSort === false){
      break;
   }
}
}
console.log(arr);
sortFunc(arr);
console.log(arr);
console.log(counter);







