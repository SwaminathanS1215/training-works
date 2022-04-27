// for in
var student = { name: "Bill", age: 25, degree: "Masters" };
console.log('for in loop');
for (var item in student) {
    console.log(student[item]); // => "Bill", then 25, then "Masters"
}
// for of
var list = ['apple', 'mango', 'pineapple'];
console.log('\nfor of loop');
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log(item);
}
