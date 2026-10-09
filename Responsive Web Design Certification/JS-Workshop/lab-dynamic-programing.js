//Build an Nth Fibonacci Number Calculator
function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[n];
}


//Build a Prime Number Sum Calculator
function sumPrimes (num){
  if (num < 2) return 0;
  let allNumbers = [];

  for(let i = 2; i <= num; i++){
    allNumbers.push(i)
  }

  function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        return false
      }
    }
    return true
  }

  const primes = allNumbers.filter((n) => isPrime(n));
  return primes.reduce((acc,curr) => acc + curr);

}

console.log(sumPrimes(10));



