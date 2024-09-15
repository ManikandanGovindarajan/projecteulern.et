// Multiples of 3 or 5

/* 
   https://projecteuler.net/problem=1

   problem content 

   If we list all the natural numbers below  10  that are multiples of  3  or  5 , we get  3 , 5 , 6  and  9 . The sum of these multiples is  23 .  
   Find the sum of all the multiples of  3  or  5  below  1000 .
.
*/

/*
   Here we used sum of arithmetic sequence

   to find the sum of n numbers 
   (n times n + 1 )  / 2 

   or  we can do ( n / 2 ) * (1 + n)


   the above is the different expressions of  this (n**2 + n) / 2j)

*/


const sumOfNumbersByDvisibleN = (target, n) => {
   const noOfMultiples =  Math.floor((target - 1)  / n)

   const sum = Math.floor( (n * (noOfMultiples * (noOfMultiples + 1))) / 2 )
   return sum;
}


console.log( sumOfNumbersByDvisibleN(10, 3 )+  sumOfNumbersByDvisibleN(10, 5 ) - sumOfNumbersByDvisibleN(10, 15 ))
console.log( sumOfNumbersByDvisibleN(1000, 3 )+  sumOfNumbersByDvisibleN(1000, 5 ) - sumOfNumbersByDvisibleN(1000, 15 ))
console.log( sumOfNumbersByDvisibleN(1000000000, 3 )+  sumOfNumbersByDvisibleN(1000000000, 5 ) - sumOfNumbersByDvisibleN(1000000000, 15 ))

