"use strict";

  function isPangram(string) {
    let counter = 0;
    for(let el of new Set(string.toLowerCase().split(''))){
      if(el != ' ' && el != ',' && el != '.'){
        counter++;
      }
    }
    return counter === 26 ? true : false;
  }


console.log('1:' + isPangram('The quick brown fox jumps over the lazy dog')); 
console.log('2:' + isPangram('The quick brown fox')); 
console.log('3:' + isPangram('Veldt jynx grimps waqf zho buck')); 
console.log('4:' + isPangram('Only the fool would take trouble to verify that his sentence was composed of ten as, three bs, four cs')); 
console.log('6:' + isPangram('I, quartz pyx, who fling muck beds')); 

