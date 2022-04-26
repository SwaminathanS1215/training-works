var numArr = [1231, 23234, 43535, 45646, 54456, 678678, 97880, 98880];
if (numArr[1] > numArr[0]) {
    swapArrayElements(numArr[1]);
}
function swapArrayElements(value) {
    var temp = numArr[0];
    numArr[0] = value;
    numArr[1] = temp;
}
// Iterate through elements to find largest one
for (var num = 2; num < numArr.length; num++) {
    if (numArr[0] < numArr[num]) {
        swapArrayElements(numArr[num]);
    }
    else if (numArr[1] < numArr[num]) {
        numArr[1] = numArr[num];
    }
}
console.log("First Largest is ".concat(numArr[0], " \n Second Largest is ").concat(numArr[1]));
