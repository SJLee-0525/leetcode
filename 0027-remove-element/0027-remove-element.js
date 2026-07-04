/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ret = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = 51;
            ret--;
        };
    };

    nums.sort((a, b) => a - b);

    return ret;    
};