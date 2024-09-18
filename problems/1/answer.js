// Multiples of 3 or 5

/* 
   https://projecteuler.net/problem=1

   problem content 

   If we list all the natural numbers below  10  that are multiples of  3  or  5 , we get  3 , 5 , 6  and  9 . The sum of these multiples is  23 .  
   Find the sum of all the multiples of  3  or  5  below  1000 .
.
*/

const iterator = function(start=0, end){
    let result = 0;
    for (let i = start; i < end; i++){
        if(i % 3 === 0 || i %5 === 0){
            result += i;
        }
    }
    return result;
}

console.log(iterator(1, 10));
console.log(iterator(1, 1000));
console.log(iterator(1, 1000000000));