"use strict";

const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
};

function isBudgetEnough(data) {
   let shopsArea = 0;
   for (let key in data.shops) {
      let currenResult = data.shops[key].width * data.shops[key].length;
      shopsArea += currenResult;
   }
   let mallArea = shopsArea * data.height;
   let totalBudget = mallArea * data.moneyPer1m3;
   if(totalBudget < data.budget){
      return ('Бюджета достаточно');
   }else{
      return ('Бюджета недостаточно');
   }
}
console.log(isBudgetEnough(shoppingMallData)); 














