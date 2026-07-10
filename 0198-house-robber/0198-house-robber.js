/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // [x][0]은 턴 것, [x][1]은 털지 않은 것
    const DP = Array.from({ length: nums.length }, () => Array(2).fill(0));
    DP[0][0] = nums[0];
    if (nums.length === 1) return Math.max(...DP[0]);

    DP[1][1] = DP[0][0], DP[1][0] = Math.max(DP[0][0], nums[1]);
    if (nums.length === 2) return Math.max(...DP[1]);

    for (let n = 2; n < nums.length; n++) {
        DP[n][0] = DP[n - 1][1] + nums[n];
        DP[n][1] = Math.max(...DP[n - 1]);

    };

    return Math.max(...DP[nums.length - 1]);
};