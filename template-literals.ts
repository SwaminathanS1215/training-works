let numArr: number[] = [1231, 23234, 43535, 45646, 54456, 678678, 97880, 98880];

// Swapping first two elements if second element is greater than first one
if (numArr[1] > numArr[0]) {
    swapArrayElements(numArr[1]);
}

function swapArrayElements(value): void {
    let temp: number = numArr[0];
    numArr[0] = value;
    numArr[1] = temp;
}

// Iterate through elements to find largest one
for (let num = 2; num < numArr.length; num++) {
    if (numArr[0] < numArr[num]) {
        swapArrayElements(numArr[num]);
    } else if(numArr[1] < numArr[num]) {
        numArr[1] = numArr[num];
    }
}

console.log(`First Largest is ${numArr[0]} \n Second Largest is ${numArr[1]}`)

