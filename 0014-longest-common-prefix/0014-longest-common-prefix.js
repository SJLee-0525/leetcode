/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ret = "";
    
    const minLength = strs.reduce((a, c) => {
        if (c.length < a) return c.length;
        return a;
    }, 200);
    
    for (let m = 0; m < minLength; m++) {
        let cur = strs[0][m];
        
        for (let s = 1; s < strs.length; s++) {
            if (cur !== strs[s][m]) return ret;  
        };
        
        ret += cur;
    };
    
    return ret;
};