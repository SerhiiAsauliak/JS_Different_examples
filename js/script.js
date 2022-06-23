"use strict";

const students = ['Peter','Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr, amount) {  
// arr - our array,
// amount means how many students do you want to see in group   
   arr.sort();
   let res = [];
   for (let i = 0; i <= arr.length; i+=amount) {
      let msg = 'Оставшиеся студенты:';
      let temp = arr.slice(i,i + amount);
      if(temp.length === 0){
         res.push(msg + '-');
         continue;
      }else if(temp.length !== amount){
         res.push(`${msg} ${temp.join(', ')}`);
         continue;
      }
      res.push(temp);
   }
   return res;
}

console.log(sortStudentsByGroups(students, 3)); 














