// Derived class of IQueue
var Queue = /** @class */ (function () {
    function Queue() {
        this.queueData = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.queueData.push(value);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty())
            return "Queue is empty";
        return this.queueData.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.queueData.length === 0;
    };
    // Display the queue elements
    Queue.prototype.display = function () {
        for (var i = 0; i < this.queueData.length; i++) {
            console.log(this.queueData[i]);
        }
    };
    return Queue;
}());
// queue class object
var queueObj = new Queue();
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
