// Derived class of IStack
var Stack = /** @class */ (function () {
    function Stack() {
        this.stackData = [];
    }
    Stack.prototype.push = function (num) {
        this.stackData.push(num);
    };
    Stack.prototype.pop = function () {
        return this.stackData[this.stackData.length - 1];
    };
    // Display stack data
    Stack.prototype.display = function () {
        for (var i = this.stackData.length - 1; i >= 0; i--) {
            console.log(this.stackData[i]);
        }
    };
    return Stack;
}());
var stackObj = new Stack();
// Push
console.log('\nPush Black');
stackObj.push('Black');
console.log('\Push White');
stackObj.push('White');
console.log('\Push Yellow');
stackObj.push('Yellow');
console.log('\Push Red');
stackObj.push('Red');
console.log('\Push Blue');
stackObj.push('Blue');
// Pop
console.log('\nPop - ' + stackObj.pop());
// Display
console.log('\nDisplay');
stackObj.display();
