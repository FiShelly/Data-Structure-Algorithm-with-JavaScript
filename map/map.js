(function () {

    var testin = this.testin;

    var Map = function () {
        this.items = {};

    };

    //向集合添加元素
    Map.prototype.set = function (key, val) {
        if (!this.has(key)) {
            this.items[key] = val;
            return true;
        }
        return false;
    };
    //判断集合是否存在某个元素
    Map.prototype.has = function (key) {
        return this.items.hasOwnProperty(key);
    };
    //根据key获取指定的元素
    Map.prototype.get = function (key) {
        return this.items[key];
    };
    //删除集合指定的元素
    Map.prototype.delete = function (key) {
        delete this.items[key];
        return true;
    };
    //清空集合
    Map.prototype.clear = function () {
        this.items = {};
    };
    //返回集合长度
    Map.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    //返回集合values数组
    Map.prototype.values = function () {
        var values = [];
        for (var key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key]);
            }
        }
    };

    //返回集合key数组
    Map.prototype.keys = function () {
        return Object.keys(this.items);
    };

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
