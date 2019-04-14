var Queue = function () {
    this.items = [];

};

//向队列添加元素
Queue.prototype.enqueue = function (el) {
    this.items.push(el);
};
//移除队列的第一个元素
Queue.prototype.dequeue = function () {
    return this.items.shift();
};
//返回队列第一个元素
Queue.prototype.front = function () {
    return this.items[0];
};
//如果队列内没有元素返回true，否则false
Queue.prototype.isEmpty = function () {
    return !this.items.length;
};
//清空队列
Queue.prototype.clear = function () {
    this.items = [];
};
//返回队列内的元素个数
Queue.prototype.size = function () {
    return this.items.length;
};

//优先队列
var PriorityQueue = function () {};
PriorityQueue.prototype = new Queue();
PriorityQueue.prototype.constructor = PriorityQueue;
//构建优先队列元素
PriorityQueue.QueueElement = function (element, priority) {
    this.element = element;
    this.priority = priority;
};

//根据元素优先级入队
PriorityQueue.prototype.enqueue = function (el, priority) {
    var element = new PriorityQueue.QueueElement(el, priority);

    var lastLen = this.size();
    for (var i = 0; i < this.items.length; i++) {
        var temp = this.items[i];
        if (temp.priority < element.priority) {
            this.items.splice(i, 0, element);
            break;
        }
    }
    if (lastLen === this.size()) {
        this.items.push(element);
    }
};

//循环队列方法
Queue.circle = function (queue, stopNum) {
    var outList = [];
    while (queue.size() > 1) {
        for (var i = 0; i < stopNum; i++) {
            queue.enqueue(queue.dequeue());
        }
        outList.push(queue.dequeue);
    }
    outList.push(queue.dequeue());
    return outList;
};
