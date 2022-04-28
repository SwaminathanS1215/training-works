interface IStack {
    push(num: string);
    pop(): string;
    display();
}

// Derived class of IStack
class Stack implements IStack  {
    stackData: string[] = [];

    push(num: string) {
        this.stackData.push(num);
    }

    pop(): string {
        return this.stackData[this.stackData.length - 1];
    }

    // Display stack data
    display() {
        for (let i = this.stackData.length - 1; i >= 0; i--) {
            console.log(this.stackData[i]);
        }
    }
}

let stackObj: IStack = new Stack();

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

