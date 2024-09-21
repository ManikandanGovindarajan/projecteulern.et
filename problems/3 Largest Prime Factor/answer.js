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

        If we could say that given n is an odd number. Then we need to find only, is
        there any odd number between 3 and sq
*/

const isPrime = (n) => {
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0) {
    return false;
  }
  const squareRootOfN = Math.ceil(Math.sqrt(n));

  // to skip the even number, we are incrementing by 2;
  for (let i = 3; i <= squareRootOfN; i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const getNextPrime = (n) => {
    if(n <= 2){
        return 3;
    }
   let i=n;;
    while(true){
        i += 2;
        if(isPrime(i)){
            return i;
        }
    }
};

const findLargestPrimeFactor = (n) =>{

    let primeFactor, nextPrime = 0;
    const squareRootOfN = Math.ceil(Math.sqrt(n));

    while(nextPrime <= squareRootOfN){
        nextPrime = getNextPrime(nextPrime);
        if(n % nextPrime === 0 ){
            primeFactor = nextPrime;
        }
    }
    return primeFactor;
}

console.log(findLargestPrimeFactor(13195));
console.log(findLargestPrimeFactor(600851475143));
