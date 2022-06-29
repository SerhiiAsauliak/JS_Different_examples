"use strict";

let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],
  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],
    internals: [{
      name: 'Jack',
      salary: 1300
    }],
  }
};

function salarySumByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].salary;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];
     for(let el of Object.values(data)){
      let dataArray = salarySumByRecursion(el);
      total[0] += dataArray[0];
      total[1] += dataArray[1];
     }
     return total;
  }
}
console.log(salarySumByRecursion(company));

function salarySum(data) {
  let personCount = 0;
  let salarySum = 0;
  for(let el of Object.values(data)){
    if(Array.isArray(el)){
      for (let i = 0; i < el.length; i++) {
        salarySum  += el[i].salary;
        personCount++; 
      }
    }else{
      for(let key of Object.values(el)){
        for (let i = 0; i < key.length; i++) {
          salarySum  += key[i].salary;
          personCount++; 
        }
      }
    }
  }
  return (`All salary: ${salarySum}; Count of workers: ${personCount}`);
}
console.log(salarySum(company));


