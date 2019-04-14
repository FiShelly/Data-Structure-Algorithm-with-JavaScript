(function () {

    var testin = this.testin;

    window.onload = function () {
        testin.test('1. Map operation', function () {
            var map = new Map();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            map.set($0, $0);
            map.set($1, $1);
            map.set($2, $2);
            map.set($3, $3);
            map.set($4, $4);

            testin.assert(map.size() === 5, 'The map size is 5');
            testin.assert(map.get($0) === $0, 'The key is 0, the value 0');
            testin.assert(!map.clear() && map.size() === $0, 'After clear, the map is length is 0');
        });

    };
})();
