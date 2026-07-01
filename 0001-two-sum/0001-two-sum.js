/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sortedNums = nums.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0]);
    
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const cur = sortedNums[left][0] + sortedNums[right][0];
        
        if (cur === target) return [sortedNums[left][1], sortedNums[right][1]].sort((a, b) => a - b);
        else if (cur < target) left++;
        else right--;
    };
};