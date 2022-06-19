"use strict";  
// Simple tree - one side

// let star = '*';
// const size = 10;
// while(star.length < size){
//    console.log(star);
//    star += '*';
// }

// Beautiful tree 

const size = 10;

for (let i = 0; i < size; i++){
   let stars = '*';
   for (let j = 0; j < i; j++){
      stars += '**';
   }
   let spacesBefore = ' '.repeat(size-i-1);
   console.log(spacesBefore + stars);
}

// Beautiful tree - short version

// for (let i = 0; i < size; i++) {
//    let stars = '*'.repeat(2 * i + 1);
//    let spacesBefore = ' '.repeat(size - i - 1);
//    console.log(spacesBefore + stars);
//  }


