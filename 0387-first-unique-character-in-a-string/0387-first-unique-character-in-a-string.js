/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const check = Array(s.length).fill(0);
    
    for (let c = 0; c < s.length; c++) {
        if (check[c]) continue;
        
        let flag = true;
      
        for (let n = c + 1; n < s.length; n++) {
            if (s[c] === s[n]) {
                check[n] = 1;
                if (flag) flag = false;
            };
        };
        
        if (flag) return c;
    };
    
    return -1;
};