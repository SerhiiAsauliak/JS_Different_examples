"use strict";
// Find the value and area of cube
function calculateVolumeAndArea(side) {
   if (typeof(side) === 'number' && side > 0 && Number.isInteger(side)) {
      let area = 6 * Math.pow(side, 2);
      let volume = Math.pow(side, 3);
      return (`Обьем куба: ${volume},площадь всей поверхности: ${area}`);
   } else {
      return ('При вычислении произошла ошибка');
   }
}
console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));


