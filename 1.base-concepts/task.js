"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c;
  let arr = [x1, x2];
  if(a == 0) 
    return false;
  
  if(D > 0) {
     x1 = (-b + Math.sqrt(d) )/(2*a);
     x2 = (-b - Math.sqrt(d) )/(2*a);
        return arr[x1, x2];
  } else if (D == 0) {
    x1 = -b/(2*a);
        return arr[x1];
   } else if (D < 0) 
        return arr[x1, x2];
     
}


  let percent = 21.9;
    let amount = 300000;
    let countMonths = 12; 
    let contribution = 30000;

   function calculateTotalMortgage(percent, contribution, amount, countMonths) {
       
    let P = (percent / 12) / 100;
    let S = amount - contribution;
    let koef = P + (P / ((Math.pow(P + 1,countMonths)) - 1));
    
    if(typeof S != "number" ||
       typeof percent != "number" ||
       typeof countMonths != "number" 
     ) return false;
  
    let annPayment = +(S  * koef).toFixed(2);
    let totalPayment = (annPayment *  countMonths).toFixed(2);

    return totalPayment;


   }

  
