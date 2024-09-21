/*
    problem content

    The prime factors of  13195  are  5 , 7 , 13  and  29 . 
    What is the largest prime factor of the number  600851475143 ?


*/

/*


    2 is the first and only even prime number and 3 is the first odd prime
    number.

    if the given n is not equal to 2 and it is even number, then it is not a prime
    number.


    For Any given n, 
        if there is no factor between 2 and square_root(n) for n,
        then there will be no factor above square_root(n) for n. (its a prime number)
        because the product of the  any two number above the square_root(n) will always be higher than the n itself. 

        If we could say that given n is an odd number. Then we need to find only, is
        there any odd number between 3 and sq
*/

const largestPrimeFactor = (n) => {
  // Handle the special case of 2
  if (n % 2 === 0) {
    while (n % 2 === 0) {
      n /= 2; // Lets remove all the mutiples of 2 in the n
    }
  }

  let i = 3;

  while (i * i <= n) {
    if (n % i === 0) {
      n = n / i; // Lets remove all the mutiples of i in the n
      while (n % i === 0) {
        n = n / i;
      }
    }
    i += 2;
  }
  return n > 1 ? n : i - 2;
};

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));
