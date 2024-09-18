// Even Fibonacci Numbers

/* 
 problem content
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
    By starting with  1  and  2 , the first  10  
    terms will be: 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , …  
    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


const isEven = n =>  n % 2 === 0;

const isGreaterThan40Million = n => n >= 4000000;


let previousTerm = 1;
let i = 1;
let sum = 0;

while(true) {
    let j = i;
    i = i + previousTerm;
    previousTerm = j;

    if(isGreaterThan40Million(i)){
        break;
    }
    if(isEven(i)){
        sum += i;
    }
}

console.log(sum);