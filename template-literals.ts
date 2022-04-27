let numArray: number[] = [1231, 23234, 43535, 45646, 54456, 678678, 97880, 98880];

// Swapping first two elements if second element is greater than first one
if (numArray[1] > numArray[0]) {
    swapArrayItems(numArray[1]);
}

function swapArrayItems(value): void {
    let temp: number = numArray[0];
    numArray[0] = value;
    numArray[1] = temp;
}

// Iterate through elements to find largest one
for (let num = 2; num < numArray.length; num++) {
    if (numArray[0] < numArray[num]) {
        swapArrayItems(numArray[num]);
    } else if(numArray[1] < numArray[num]) {
        numArray[1] = numArray[num];
    }
}

console.log(`First Largest is ${numArray[0]} \n Second Largest is ${numArray[1]}`)

