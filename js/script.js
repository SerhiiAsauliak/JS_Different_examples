"use strict";

function getFibNum(num) {
   if(isNaN(num) || !Number.isInteger(num)){
      return '';
   }
   let firstNum = 0;
   let socondNum = 1;
   let currentFibNum = 0;
   let arrFibNum = [];
   for (let i = 0; i < num; i++) {
      arrFibNum[i] = currentFibNum;
      currentFibNum = firstNum + socondNum;
      socondNum = firstNum;
      firstNum = currentFibNum;
   }
   return (arrFibNum.join([' ']));
}
console.log(getFibNum(10));


