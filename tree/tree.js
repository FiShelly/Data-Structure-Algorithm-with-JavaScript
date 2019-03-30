(function () {

    var testin = this.testin;

    function BinarySearchTree (key) {

        this.root = null;
    }

    BinarySearchTree.Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    BinarySearchTree.inOrderTraverseNode = function (node, cb) {
        if (node) {
            this.inOrderTraverseNode(node.left, cb);
            cb(node);
            this.inOrderTraverseNode(node.right, cb);
        }
    };

    BinarySearchTree.preOrderTraverseNode = function (node, cb) {
        if (node) {
            cb(node);
            this.preOrderTraverseNode(node.left, cb);
            this.preOrderTraverseNode(node.right, cb);
        }
    };

    BinarySearchTree.postOrderTraverseNode = function (node, cb) {
        if (node) {
            this.preOrderTraverseNode(node.left, cb);
            this.preOrderTraverseNode(node.right, cb);
            cb(node);
        }
    };

    BinarySearchTree.searchNode = function (node, key) {
        if (!node) {
            return false;
        }

        if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    };

    BinarySearchTree.insertNode = function (node, newNode) {
        if (node.key > newNode.key) {
            if (node.left) {
                this.insertNode(node.left, newNode);
            } else {
                node.left = newNode;
            }
        } else {
            if (node.right) {
                this.insertNode(node.right, newNode);
            } else {
                node.right = newNode;
            }
        }
    };

    BinarySearchTree.searchMinNode = function (node) {
        while (node && node.left) {
            node = node.left;
        }
        return node;
    };

    BinarySearchTree.removeNode = function (node, key) {
        if (!node) {
            return null;
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }
            var min = BinarySearchTree.searchMinNode(node.right);
            node.key = min.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    };

    BinarySearchTree.prototype.insert = function (key) {
        var node = new BinarySearchTree.Node(key);
        if (this.root) {
            BinarySearchTree.insertNode(this.root, node);
        } else {
            this.root = node;
        }
    };

    BinarySearchTree.prototype.inOrderTraverse = function (cb) {
        BinarySearchTree.inOrderTraverseNode(this.root, cb);
    };

    BinarySearchTree.prototype.preOrderTraverse = function (cb) {
        BinarySearchTree.preOrderTraverseNode(this.root, cb);
    };

    BinarySearchTree.prototype.postOrderTraverse = function (cb) {
        BinarySearchTree.postOrderTraverseNode(this.root, cb);
    };

    BinarySearchTree.prototype.search = function (key) {
        return BinarySearchTree.searchNode(this.root, key);
    };

    BinarySearchTree.prototype.max = function () {
        if (!this.root) {
            return;
        }
        var node = this.root;
        while (node.right) {
            node = node.right;
        }
        return node;

    };

    BinarySearchTree.prototype.min = function () {
        return BinarySearchTree.searchMinNode(this.root);
    };

    BinarySearchTree.prototype.remove = function (key) {
        return BinarySearchTree.removeNode(this.root, key);
    };

    AvlBinarySearchTree = function () {};
    AvlBinarySearchTree.prototype = new BinarySearchTree();
    AvlBinarySearchTree.prototype.constructor = AvlBinarySearchTree;

    AvlBinarySearchTree.prototype.insert = function (key) {
        this.root = AvlBinarySearchTree.insertNode(this.root, key);
    };

    AvlBinarySearchTree.getHeightNode = function (node) {
        if (!node) {
            return -1;
        } else {
            return Math.max(this.getHeightNode(node.left), this.getHeightNode(node.right)) + 1;
        }
    };

    AvlBinarySearchTree.rotationRR = function (node) {
        var temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    };

    AvlBinarySearchTree.rotationLL = function (node) {
        var temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    };

    AvlBinarySearchTree.rotationLR = function (node) {
        node.left = this.rotationRR(node);
        return this.rotationLL(node);
    };

    AvlBinarySearchTree.rotationRL = function (node) {
        node.right = this.rotationLR(node);
        return this.rotationRR(node);
    };

    AvlBinarySearchTree.insertNode = function (node, key) {
        if (node === null) {
            return new BinarySearchTree.Node(key);
        } else if (key < node.key) {
            node.left = this.insertNode(node.left, key);
            if (this.getHeightNode(node.left) - this.getHeightNode(node.right) > 1) {
                if (key < node.left.key) {
                    node = this.rotationLL(node);
                } else {
                    node = this.rotationLR(node);
                }
            }
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
            if (this.getHeightNode(node.right) - this.getHeightNode(node.left) > 1) {
                if (key > node.right.key) {
                    node = this.rotationRR(node);
                } else {
                    node = this.rotationRL(node);
                }
            }
        }
        return node;
    };

    window.onload = function () {
        testin.test('1. Bst operation', function () {
            var bst = new BinarySearchTree();

            var arrays = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];

            arrays.forEach(function (val) {
                bst.insert(val);
            });

            testin.assert(bst, 'Insert Tree');

            var result = [];
            bst.inOrderTraverse(function (node) {
                result.push(node.key);
            });

            testin.assert('in order traverse', result);

            result = [];
            bst.preOrderTraverse(function (node) {
                result.push(node.key);
            });

            testin.assert('pre order traverse', result);

            result = [];
            bst.postOrderTraverse(function (node) {
                result.push(node.key);
            });

            testin.assert('post order traverse', result);

            testin.assert(bst.min().key === 3, 'the min node is 3');
            testin.assert(bst.max().key === 25, 'the min node is 25');
            testin.assert(bst.search(10), 'search node which key is 10');
            testin.assert(bst.remove(10), 'remove node which key is 10');
            testin.assert(bst.search(10), 'search node which key is 10');

        });

        testin.test('2. AVL Bst operation', function () {
            var bst = new AvlBinarySearchTree();

            var arrays = [50, 30, 70, 10, 40, 5];

            arrays.forEach(function (val) {
                bst.insert(val);
            });

            console.log(bst);
            return;

            testin.assert(bst, 'Insert Tree');

            var result = [];
            bst.inOrderTraverse(function (node) {
                result.push(node.key);
            });

            testin.assert('in order traverse', result);

            result = [];
            bst.preOrderTraverse(function (node) {
                result.push(node.key);
            });

            testin.assert('pre order traverse', result);

            result = [];
            bst.postOrderTraverse(function (node) {
                result.push(node.key);
            });

            testin.assert('post order traverse', result);

            testin.assert(bst.min().key === 3, 'the min node is 3');
            testin.assert(bst.max().key === 25, 'the min node is 25');
            testin.assert(bst.search(10), 'search node which key is 10');
            testin.assert(bst.remove(10), 'remove node which key is 10');
            testin.assert(bst.search(10), 'search node which key is 10');

        });

    };
})();
