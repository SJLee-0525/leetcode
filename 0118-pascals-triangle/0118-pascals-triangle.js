/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ret = Array.from({ length: 1 }, () => Array(1).fill(1));
    if (numRows >= 2) ret.push(Array(2).fill(1)); 
        
    for (let n = 2; n < numRows; n++) {
        const temp = Array(n + 1);
        
        for (let m = 0; m <= Math.floor((n + 1) / 2); m++) {
            temp[m] = (m === 0 ? 0 : ret[n - 1][m - 1]) + ret[n - 1][m];
            temp[temp.length - 1 - m] = temp[m];
        };
        
        ret.push(temp);
    };
    
    return ret;
};