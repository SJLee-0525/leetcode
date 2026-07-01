
var MinStack = function() {
    this.stack = new Array();
    this.minStack = new Array();
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value);
    
    if (this.stack.length > 0 && this.minStack[this.minStack.length - 1] < value) this.minStack.push(this.minStack[this.minStack.length - 1]);
    else this.minStack.push(value);
    
    return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        this.stack.pop();
        this.minStack.pop();
    };
    
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */