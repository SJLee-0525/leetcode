/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const check = new Map();
    
    for (const num of nums) {
        if (check.has(num)) check.set(num, check.get(num) + 1);
        else check.set(num, 1);
    };
    
    for (const [k, v] of check) {
        if (v === 1) return k;
    };
};