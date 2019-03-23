(function () {

    var testin = this.testin;

    var Set = function () {
        this.items = {};

    };

    //向集合添加元素
    Set.prototype.add = function (el) {
        if (!this.has(el)) {
            this.items[el] = el;
            return true;
        }
        return false;
    };
    //判断集合是否存在某个元素
    Set.prototype.has = function (val) {
        return this.items.hasOwnProperty(val);
    };
    //删除集合指定的元素
    Set.prototype.remove = function (el) {
        delete this.items[el];
        return true;
    };
    //清空集合
    Set.prototype.clear = function () {
        this.items = {};
    };
    //返回集合长度
    Set.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    //返回集合values数组
    Set.prototype.values = function () {
        var values = [];
        for (var key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key]);
            }
        }
    };
    
    window.onload = function () {
        testin.test('1. Set operation', function () {
            var set = new Set();

            var $0 = 0;
            var $1 = 1;
            var $2 = 2;
            var $3 = 3;
            var $4 = 4;

            set.add($0);
            set.add($1);
            set.add($2);
            set.add($3);
            set.add($4);

            testin.assert(set.size() === 5, 'The set size is 5');
            testin.assert(!set.clear() && set.size() === $0, 'After clear, the set is length is 0');
        });

    };
})();
