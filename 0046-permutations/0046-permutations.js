/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = Array();

    const path = Array();
    const used = Array(nums.length).fill(false);

    const perm = () => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        };

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);
            perm();
            path.pop();
            used[i] = false;
        };
    };

    perm();

    return res;
};