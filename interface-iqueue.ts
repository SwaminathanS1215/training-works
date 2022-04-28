interface IQueue {
    enqueue(value: number);
    dequeue(): any;
    isEmpty(): boolean;
    display();
}

// Derived class of IQueue
class Queue implements IQueue {
    queueData: number[] = [];

    enqueue(value: number) {
        this.queueData.push(value);
    }

    dequeue(){
        if (this.isEmpty())
            return "Queue is empty"; 
        return this.queueData.shift();       
    }

    isEmpty(): boolean {
        return this.queueData.length === 0;   
    }

    // Display the queue elements
    display() {
        for (let i = 0; i < this.queueData.length; i++) {
            console.log(this.queueData[i]);
        }
    }
}

// queue class object
let queueObj: IQueue = new Queue();

// Dequeue
console.log('Dequeue - ' + queueObj.dequeue());

// Enqueue
console.log('\nEnqueue 10');
queueObj.enqueue(10);

console.log('Enqueue 20');
queueObj.enqueue(20);

console.log('Enqueue 30');
queueObj.enqueue(30);

console.log('Enqueue 40');
queueObj.enqueue(40);

console.log('Enqueue 50');
queueObj.enqueue(50);


// Dequeue
console.log('\nDequeue - ' + queueObj.dequeue());

// Display Queue
console.log('\nDisplay');
queueObj.display();
