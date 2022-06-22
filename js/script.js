"use strict";

const someString = 'This is some strange string';

function reverseString(str) {
   if(typeof(str) !== 'string'){
      return ('Ошибка!');
   }else{
      let arr = [];
      for (let key in str) {
         arr[key] = str[key];
      }
      let newArr = arr.slice().reverse();
      return newArr.join('');
   }
}
function reverseStringQuick(str) {
   if(typeof(str) !== 'string'){
      return ('Ошибка!');
   }else{
      return str.split('').reverse().join('');
   }
}

console.log(reverseString(someString));
console.log(reverseString(10));
console.log(reverseStringQuick(someString));
console.log(reverseStringQuick(10));








