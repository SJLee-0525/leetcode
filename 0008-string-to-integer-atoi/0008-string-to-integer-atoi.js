/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const str = s.trim();
    
    let res = "0";
    let metSign = 0, metNum = false;
    for (const e of str) {
        if (e === "-" || e === "+") {
            if (metNum || metSign !== 0) break;
            else metSign = (e === "-") ? -1 : 1;
        } else if (!isNaN(e)) {
            if (e === " ") break;
            if (!metNum) metNum = true;
            res += e;
        } else break;
    };
    console.log(res)
    const temp = BigInt(res);
    let ret = (temp >= 2147483648n) ? (metSign === -1) ? 2147483648n : 2147483647n : temp;
    if (metSign === -1) return Number(ret) * -1;
    return Number(ret);
};