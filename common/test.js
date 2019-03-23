(function (document) {
    var testin = this.testin = {};

    var results, queue = [], paused = false;

    function assert (value, desc) {
        var li = document.createElement('li');
        li.className = value ? 'pass' : 'failAndAdd';
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = 'fail';
        }
        return li;
    }

    function test (name, fn) {
        results = document.querySelector('#results');
        results = assert(true, name).appendChild(document.createElement('ul'));
        fn();
    }

    function testAsync (name, fn) {
        queue.push(function () {
            test(name, fn);
        });
        runTest();
    }


    function runTest () {
        if (!paused && queue.length) {
            testAsync.pause();
            queue.shift()();
            if (!paused) {
                testAsync.resume();
            }
        }
    }

    testin.assert = assert;
    testin.test = test;
    testin.testAsync = testAsync;

    testin.testAsync.pause = function pause () {
        paused = true;
    };

    testin.testAsync.resume = function resume () {
        paused = false;
        setTimeout(runTest);
    };
})(document, window);
