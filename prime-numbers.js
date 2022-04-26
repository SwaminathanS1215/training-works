// N Prime numbers
var nPrimeNumber = 50;
for (var num = 1; num <= nPrimeNumber; num++) {
    var count = 0;
    for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            count++;
            break;
        }
    }
    if (count === 0 && num != 1) {
        console.log(num);
    }
}
