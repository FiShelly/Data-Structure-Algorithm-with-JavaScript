(function () {

    var testin = this.testin;

    var HashTable = function () {
        this.table = [];
    };
    HashTable.LinkedListElement = function (key, value) {
        this.key = key;
        this.value = value;
    };
    HashTable.getHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    //向散列表添加元素（分离链接解决冲突）
    HashTable.prototype.put = function (key, val) {
        var posi = HashTable.getHashCode(key);
        this.table[posi] = this.table[posi] || new LinkedList();
        this.table[posi].append(new HashTable.LinkedListElement(key, val));
    };

    //向散列表添加元素(线性探测解决冲突)
    HashTable.prototype.putUseLineCkeck = function (key, val) {
        var posi = HashTable.getHashCode(key);
        var item = new HashTable.LinkedListElement(key, val);
        if (!this.table[posi]) {
            this.table[posi] = item;
        } else {
            var index = ++posi;
            while (this.table[index]) {
                index++;
            }
            this.table[index] = item;
        }
    };

    //删除散列表指定的元素（分离链接）
    HashTable.prototype.remove = function (key) {
        var posi = HashTable.getHashCode(key);
        var linkedList = this.table[posi];
        if (linkedList) {
            var el = linkedList.find(function (el) {
                return el.key === key;
            });
            linkedList.remove(el);
            return true;
        }
        return false;
    };

    //删除散列表指定的元素（线性探测）
    HashTable.prototype.removeUseLineCheck = function (key) {
        var posi = HashTable.getHashCode(key);
        if (!this.table[posi]) {
            var index = posi;
            while (!this.table[index] || this.table[index].key !== key) {
                index++;
            }
            if (this.table[index].key === key) {
                this.table[posi] = undefined;
                return true;
            }
            return false;
        }
        return true;
    };

    //获取散列表的指定元素（分离链接）
    HashTable.prototype.get = function (key) {
        var posi = HashTable.getHashCode(key);
        var linkedList = this.table[posi];
        if (linkedList) {
            return linkedList.find(function (el) {
                return el.key === key;
            });
        }
        return undefined;
    };

    //删除散列表指定的元素（线性探测）
    HashTable.prototype.removeUseLineCheck = function (key) {
        var posi = HashTable.getHashCode(key);
        if (!this.table[posi]) {
            var index = posi;
            while (!this.table[index] || this.table[index].key !== key) {
                index++;
            }
            if (this.table[index].key === key) {
                return this.table[posi];
            }
            return false;
        }
        return true;
    };

    window.addEventListener('load', function () {
        testin.test('2. HashTable operation', function () {
            var hashTable = new HashTable();

            var $12 = 'HashTable12';
            var $21 = 'HashTable21';
            var $131 = 'HashTable131';
            var $311 = 'HashTable311';
            var $113 = 'HashTable113';

            hashTable.put($12, $12);
            hashTable.put($21, $21);
            hashTable.put($131, $131);
            hashTable.put($311, $311);
            hashTable.put($113, $113);

            testin.assert(hashTable.get($12).value === $12, 'get right value');
            testin.assert(hashTable.remove($311) && !hashTable.get($311), 'remove value');
        });

        testin.test('3. HashTable operation', function () {
            var hashTable = new HashTable();

            var $12 = 'HashTable12';
            var $21 = 'HashTable21';
            var $131 = 'HashTable131';
            var $311 = 'HashTable311';
            var $113 = 'HashTable113';

            hashTable.put($12, $12);
            hashTable.put($21, $21);
            hashTable.put($131, $131);
            hashTable.put($311, $311);
            hashTable.put($113, $113);

            testin.assert(hashTable.get($12).value === $12, 'get right value');
            testin.assert(hashTable.remove($311) && !hashTable.get($311), 'remove value');
        });

    });
})();
