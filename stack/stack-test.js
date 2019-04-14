(function () {

    window.onload = function () {
        testin.test('1. Stack operation', function () {
            var stack = new Stack();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            stack.push($0);
            stack.push($1);
            stack.push($2);
            stack.push($3);
            stack.push($4);

            testin.assert(stack.size() === 5, 'The stack size is 5');
            testin.assert(stack.peek() === $4, 'First element in stack is 4');
            testin.assert(stack.pop() === $4 && stack.size(), 'After pop, the stack size is 4');
            testin.assert(!stack.clear() && stack.isEmpty(), 'After clear, the stack is empty');
        });

    };
})();
