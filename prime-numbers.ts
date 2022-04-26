// N Prime numbers
const nPrimeNumber: number = 50;

for (let num = 1; num <= nPrimeNumber; num++) {
    let count = 0;
    for (let i = 2; i <= num/2; i++) {
        if (num % i  === 0) {
            count++;
            break;
        }
    }
    if (count === 0 && num != 1) {
        console.log(num);
    }
}