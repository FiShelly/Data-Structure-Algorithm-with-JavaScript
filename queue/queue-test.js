(function () {


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
