function LinkedList () {}

LinkedList.Node = function (el) {
    this.element = el;
    this.next = null;
};

LinkedList.prototype.length = 0;
LinkedList.prototype.head = null;

LinkedList.prototype.append = function (el) {
    var node = new LinkedList.Node(el);
    var current = null;

    if (!this.head) {
        this.head = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    this.length++;
};
LinkedList.prototype.insert = function (el, position) {
    if (position > 0 && this.length >= position) {
        var node = new LinkedList.Node(el);
        var current = this.head;
        var previous = null;
        var index = 0;

        if (position === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true;
    }
    return false;
};
LinkedList.prototype.removeAt = function (position) {
    if (position >= 0 && this.length >= position) {
        var current = this.head;
        var previous = null;
        var index = 0;
        if (position === 0) {
            this.head = current.next;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }
    return false;
};
LinkedList.prototype.remove = function (el) {
    // var current = this.head;
    // var previous = null;
    // if (this.length > 0) {
    //     while (current) {
    //         if (current.element === el) {
    //             if (previous) {
    //                 previous.next = current.next;
    //             } else {
    //                 this.head = current.next;
    //             }
    //             this.length--;
    //             return current.element;
    //
    //         }
    //         previous = current;
    //         current = current.next;
    //     }
    // }
    return this.removeAt(this.indexOf(el));
    // return null;

};
LinkedList.prototype.indexOf = function (el) {
    var current = this.head;
    var index = 0;
    while (current) {
        if (el === current.element) {
            return index;
        }
        index++;
        current = current.next;
    }
    return -1;
};
LinkedList.prototype.find = function (fn) {
    var current = this.head;
    while (current.next) {
        if (fn(current.element)) {
            return current.element;
        }
        current = current.next;
    }
    return fn(current.element) ? current.element : undefined;
};
LinkedList.prototype.size = function () {
    return this.length;
};
LinkedList.prototype.getHead = function (position) {
    return this.head;
};

function NextPreLinkedList () {}

NextPreLinkedList.prototype = new LinkedList();
NextPreLinkedList.prototype.constructor = NextPreLinkedList;
NextPreLinkedList.prototype.tail = null;
NextPreLinkedList.Node = function (el) {
    this.element = el;
    this.next = null;
    this.prev = null;
};

NextPreLinkedList.prototype.append = function (ele) {
    var node = new NextPreLinkedList.Node(ele);
    var current = null;

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        node.prev = current;
        this.tail = node;
    }

    this.length++;
};
NextPreLinkedList.prototype.insert = function (position, ele) {
    if (position >= 0 && position <= this.length) {
        var node = new NextPreLinkedList.Node(ele);
        var current = this.head;
        var previous = null;
        var index = 0;

        if (!position) {
            if (this.head) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = current;
                current.prev = node;
                this.head = node;
            }
        } else if (position === this.length) {
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
            current.prev = node;
            node.prev = previous;
        }
        this.length++;
        return true;
    }
    return false;
};
NextPreLinkedList.prototype.removeAt = function (position) {
    if (position >= 0 && position <= this.length) {
        var current = this.head;
        var previous = null;
        var index = 0;

        if (position === 0) {
            this.head = current.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.head.prev = null;
        } else if (position === this.length - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.next = null;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.length--;
        return current.element;
    }
    return false;
};

function CircularLinkedList () {}

CircularLinkedList.prototype = new LinkedList();
CircularLinkedList.prototype.constructor = CircularLinkedList;
CircularLinkedList.prototype.getLastNode = function () {
    var current = this.head;
    while (current) {
        if (current.next === this.head) {
            return current;
        }
        current = current.next;
    }
    return this.head;
};
CircularLinkedList.prototype.append = function (el) {
    var node = new LinkedList.Node(el);
    var current = null;
    var last = this.getLastNode();
    if (!this.head) {
        this.head = node;
        node.next = node;
    } else {
        last.next = node;
        node.next = this.head;
    }

    this.length++;
};
CircularLinkedList.prototype.insert = function (el, position) {
    if (position > 0 && this.length >= position) {
        var node = new LinkedList.Node(el);
        var current = this.head;
        var previous = null;
        var index = 0;
        var last = this.getLastNode();
        if (position === 0) {
            node.next = current;
            this.head = node;
            last.next = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true;
    }
    return false;
};
CircularLinkedList.prototype.removeAt = function (position) {
    if (position >= 0 && this.length >= position) {
        var current = this.head;
        var previous = null;
        var index = 0;
        var last = this.getLastNode();

        if (position === 0) {
            this.head = current.next;
            last.next = this.head;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }
    return false;
};
