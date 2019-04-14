
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

