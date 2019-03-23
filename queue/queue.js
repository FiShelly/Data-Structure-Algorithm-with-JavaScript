(function () {

    var testin = this.testin;
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

    window.onload = function () {
        testin.test('1.1 Queue operation', function () {
            var queue = new Queue();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            queue.enqueue($0);
            queue.enqueue($1);
            queue.enqueue($2);
            queue.enqueue($3);
            queue.enqueue($4);

            testin.assert(queue.size() === 5, 'The queue size is 5');
            testin.assert(queue.front() === $0, 'First element in queue is 4');
            testin.assert(queue.dequeue() === $0 && queue.size(), 'After dequeue, the queue size is 4');
            testin.assert(!queue.clear() && queue.isEmpty(), 'After clear, the queue is empty');
        });

        testin.test('1.2 Priority Queue operation', function () {
            var queue = new PriorityQueue();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            queue.enqueue($0, $4);
            queue.enqueue($1, $3);
            queue.enqueue($2, $2);
            queue.enqueue($3, $1);
            queue.enqueue($4, $0);

            testin.assert(queue.size() === 5, 'The queue size is 5');
            testin.assert(queue.front().element === $0, 'First element in queue is 4');
            testin.assert(queue.dequeue().element === $0 && queue.size(), 'After dequeue, the queue size is 4');
            testin.assert(!queue.clear() && queue.isEmpty(), 'After clear, the queue is empty');
        });

    };
})();
