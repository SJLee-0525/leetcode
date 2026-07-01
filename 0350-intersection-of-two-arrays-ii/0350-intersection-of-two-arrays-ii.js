/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    function cal (arr1, arr2) {
        const ret = Array();
        
        while (arr1.length) {
            const tar = arr1.pop();
            for (let a = 0; a < arr2.length; a++) {
                if (tar === arr2[a]) {
                    arr2[a] = null;
                    ret.push(tar);
                    break;
                };
            };
        };
        
        return ret;
    };
    
    if (nums1.length < nums2.length) return cal(nums1, nums2);
    else return cal(nums2, nums1);
};