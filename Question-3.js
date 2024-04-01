function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function filterPrimes(array) {
    return array.filter(isPrime);
}
let primeNumbers = filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primeNumbers);
