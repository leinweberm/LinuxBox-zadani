// ZADÁNÍ
//Napište funkci, která po uplynutí stanoveného času napíše součin dvou čísel.
//
//Využijte přitom tyto vlastnosti JavaScriptu:
// Promise
// Arrow functions
// Template literals

function summResult(number1, number2, thisTimeInterval){
   const num1 = Number.parseFloat(number1);
   const num2 = Number.parseFloat(number2);
   let timeInterval = 0;
   let result = 0;

   if(Number.parseFloat(thisTimeInterval) && thisTimeInterval > 0){
      timeInterval = thisTimeInterval;
   }

   setTimeout(
      () => {
         const calculation = new Promise(function(resolve, reject){
            if (isNaN(num1) || isNaN(num2) || isNaN(timeInterval)){
               reject('ERR! Jedna ze zadaných hodnot je neplatná');
            }
            else {
               result = num1 * num2;
               resolve(result);
            }
         });
         calculation
            .then((result) => console.log(`${result}`))
            .catch((errMessage) => console.log(errMessage))
      }
   , timeInterval);  
};

summResult(50, '25', 3000);
