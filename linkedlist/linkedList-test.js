(function () {

    var testin = this.testin;



    window.onload = function () {

        testin.test('1.1 Linked List operation', function () {
            var linkedList = new LinkedList();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            linkedList.append($0);
            linkedList.append($1);
            linkedList.append($2);
            // linkedList.append($3);
            linkedList.append($4);

            testin.assert(linkedList.size() === 4, 'The linkedList size is 4');
            linkedList.insert($3, 3);
            testin.assert(linkedList.indexOf($3), 'The indexof $3 is 3');
            var $remove = linkedList.remove($3);
            testin.assert($remove === $3 && linkedList.length === 4, 'Remove $3 is success');
            $remove = linkedList.removeAt(0);
            testin.assert($remove === $0 && linkedList.length === 3, 'Remove index of 0 element is success');

        });

        testin.test('1.2 Two way Linked List operation', function () {
            var linkedList = new NextPreLinkedList();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            linkedList.append($0);
            linkedList.append($1);
            linkedList.append($2);
            // linkedList.append($3);
            linkedList.append($4);
            testin.assert(linkedList.size() === 4, 'The linkedList size is 4');
            linkedList.insert($3, 3);
            testin.assert(linkedList.indexOf($3), 'The indexof $3 is 3');
            var $remove = linkedList.remove($3);
            testin.assert($remove === $3 && linkedList.length === 4, 'Remove $3 is success');
            $remove = linkedList.removeAt(0);
            testin.assert($remove === $0 && linkedList.length === 3, 'Remove index of 0 element is success');

        });

        testin.test('1.3 Circular Linked List operation', function () {
            var linkedList = new CircularLinkedList();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            linkedList.append($0);
            linkedList.append($1);
            linkedList.append($2);
            // linkedList.append($3);
            linkedList.append($4);
            testin.assert(linkedList.size() === 4, 'The linkedList size is 4');
            linkedList.insert($3, 3);
            testin.assert(linkedList.indexOf($3), 'The indexof $3 is 3');
            var $remove = linkedList.remove($3);
            testin.assert($remove === $3 && linkedList.length === 4, 'Remove $3 is success');
            $remove = linkedList.removeAt(0);
            testin.assert($remove === $0 && linkedList.length === 3, 'Remove index of 0 element is success');

        });

    };
})();
