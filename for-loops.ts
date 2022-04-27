// for in
const student = { name: "Bill", age: 25, degree: "Masters" };

console.log('for in loop')
for (let item in student) {
    console.log(student[item]);     // => "Bill", then 25, then "Masters"
}

// for of
const list = ['apple', 'mango', 'pineapple']

console.log('\nfor of loop')
for (let item of list) {
  console.log(item)
}