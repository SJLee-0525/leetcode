/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Infinity, max = -Infinity;
    for (let n = 0; n < nums.length; n++) {
        if (min > nums[n]) min = nums[n];
        if (max < nums[n]) max = nums[n];
    }

    function useGCD (a, b)  {
        return b === 0 ? a : useGCD(b, a % b);
    }

    return useGCD(max, min);
};