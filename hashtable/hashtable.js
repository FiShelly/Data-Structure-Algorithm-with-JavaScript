(function () {

    var testin = this.testin;

    var HashTable = function () {
        this.table = [];
    };
    HashTable.getHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    //向散列表添加元素
    HashTable.prototype.put = function (key, val) {
        var posi = HashTable.getHashCode(key);
        this.table[posi] = val;
    };
    //删除散列表指定的元素
    HashTable.prototype.remove = function (key) {
        this.table[HashTable.getHashCode(key)] = undefined;
        return true;
    };
    //获取散列表的指定元素
    HashTable.prototype.get = function (key) {
        return this.table[HashTable.getHashCode(key)];
    };

    window.onload = function () {
        testin.test('1. HashTable operation', function () {
            var hashTable = new HashTable();

            var $0 = 'HashTable0';
            var $1 = 'HashTable1';
            var $2 = 'HashTable2';
            var $3 = 'HashTable3';
            var $4 = 'HashTable4';

            hashTable.put($0, $0);
            hashTable.put($1, $1);
            hashTable.put($2, $2);
            hashTable.put($3, $3);
            hashTable.put($4, $4);

            testin.assert(hashTable.get($0) === $0, 'The key is ' + $0 + ', the value is ' + $0);
            testin.assert(hashTable.remove($0), 'Remove ' + $0);
        });

    };
})();
