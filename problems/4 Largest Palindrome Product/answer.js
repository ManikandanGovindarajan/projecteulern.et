/*

problem content

A palindromic number reads the same both ways. 
The largest palindrome made from the product of two   2  -digit numbers is   9009  =  91  ×  99  .  
Find the largest palindrome made from the product of two   3  -digit numbers.


*/

const isPalindromeNumber = (number) => {
  const str = "" + number;
  let i = 0;
  j = str.length - 1;

  while (i <= j) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};

const largestPalindromeProduct = (m, n) => {
  let biggestPalindromeProduct = 0;
  let i, j;

  for (i = m; i > 0; i--) {
    for (j = n; j > 0; j--) {
      const product = i * j;
      if (isPalindromeNumber(product)) {
        biggestPalindromeProduct = product > biggestPalindromeProduct ? product : biggestPalindromeProduct;
      }
    }
  }
  return biggestPalindromeProduct;
};

console.log(largestPalindromeProduct(999, 999));

// console.log(isPalindromeNumber(9009))
// console.log(isPalindromeNumber(9019))
// console.log(isPalindromeNumber(90009))
