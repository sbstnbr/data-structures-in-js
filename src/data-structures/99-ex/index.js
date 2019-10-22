/**
 * @desc Should return whether a number is prime
 * @param {number} number
 * @returns {boolean}
 * @example isPrime(23) === true
 * @example isPrime(49) === false
 */

export function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * @desc Returns a list of primes until a max - Sieve of Eratosthenes
 * @param {number} max
 * @returns {Array} primeList
 */
export function primeList(max) {
  // Init an array of true except 0 and 1
  let result = init(max);
  // Loop from 0 to max and check if each is a prime
  for (let i = 0; i <= max; i++) {
    // Only check prime suspects
    if (result[i]) {
      if (isPrime(i)) {
        // Flag all the prime multiples as non primes
        crossOff(result, i);
      }
    }
  }
  return result.reduce((list, value, index) => {
    if (value) {
      list.push(index);
    }
    return list;
  }, []);
}

function init(max) {
  let result = new Array(max).fill(true);
  result[0] = false;
  result[1] = false;
  return result;
}

function crossOff(flags, prime) {
  let number = prime * prime;
  while (number < flags.length) {
    flags[number] = false;
    number += prime;
  }
}
