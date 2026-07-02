/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let p = 2 ** 31;
    let res = "";
    
    while (p >= 1) {
        if (n >= p) {
            n = n % p;
            res += "1";
        };
        
        p /= 2;
    };
    
    return res.length;
};