/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const res = Array();

    for (let l = low.toString().length; l <= high.toString().length; l++) {
        for (let s = 1; s <= 10 - l; s++) {
            let temp = "";

            for (let n = 0; n < l; n++) {
                temp += (s + n).toString();
            };

            temp = Number(temp);
            
            if (low <= temp && temp <= high) res.push(temp);
        };
    };

    return res;
};