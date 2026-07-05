/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const arr = [...this.original];

    for (let i = 0; i < arr.length; i++) {
        const j = i + Math.floor(Math.random() * (arr.length - i));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */