/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let s = 0; s < haystack.length - needle.length + 1; s++) {
        let flag = true;
        
        for (let n = 0; n < needle.length; n++) {
            if (haystack[s + n] !== needle[n]) {
                flag = false;
                break;
            };
        };
        
        if (flag) return s;
    };
    
    return -1;
};