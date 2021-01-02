// Return the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let primes = [2, 3, 5, 7, 11];
    let curr = 12;
    
    while (curr <= num) {
      if (primes.every(item => !Number.isInteger(curr / item))) {
        primes.push(curr);
      } 
      curr++;
    }  
    return primes.filter(i => i <= num).reduce((a, b) => a + b, 0);
  }
  
  console.log(sumPrimes(977));