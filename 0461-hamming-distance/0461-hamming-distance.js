/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const diff = x ^ y;
    
    let ret = 0, limit = 2 ** 30;
    for (let p = 1; p <= diff; p = p << 1) {
        if (p & diff) ret++;
        if (p >= limit) break;
    };
    return ret;
};