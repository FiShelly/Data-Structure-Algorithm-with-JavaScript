var Stack = function () {
    this.items = [];

};

//向栈顶添加元素
Stack.prototype.push = function (el) {
    this.items.push(el);
};
//移除栈顶元素
Stack.prototype.pop = function () {
    return this.items.pop();
};
//返回栈顶元素
Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
};
//如果栈内没有元素返回true，否则false
Stack.prototype.isEmpty = function () {
    return !this.items.length;
};
//清空栈
Stack.prototype.clear = function () {
    this.items = [];
};
//返回栈内的元素个数
Stack.prototype.size = function () {
    return this.items.length;
};
