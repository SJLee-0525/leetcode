/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const duplicate = [...nums];
  for (let d = 0; d < duplicate.length; d++) {
    nums[(d + duplicate.length + k) % duplicate.length] = duplicate[d];
  }
  return nums;
};