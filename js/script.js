"use strict";

function getTimeFromMinutes(time) {
   let changedTime;
   let onlyHours;
   let onlyMinutes;
   if (time >= 0 && time < 600 && Number.isInteger(time)) {
      if(time >= 60 && time < 120){
         onlyHours = 1;
      }else{
         changedTime = time / 60;
         onlyHours = Math.floor(changedTime);
      }
      onlyMinutes = time - onlyHours * 60;
      switch (onlyHours) {
         case 0: case 5: case 6: case 7: case 8: case 9: case 10:  
         return (`Это ${onlyHours} часов и ${onlyMinutes} минут`);
         case 2: case 3: case 4:   
         return (`Это ${onlyHours} часа и ${onlyMinutes} минут`);
         case 1:   
         return (`Это ${onlyHours} час и ${onlyMinutes} минут`);   
      }
   }else{
      return ('Ошибка проверьте данные');
   }
}
console.log(getTimeFromMinutes(60));
console.log(getTimeFromMinutes(200));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(-150));