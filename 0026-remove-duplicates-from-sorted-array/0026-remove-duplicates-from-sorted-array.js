/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const removeData = new Set(nums);
  Array(...removeData).forEach((c, i) => (nums[i] = c));

  return removeData.size;
};