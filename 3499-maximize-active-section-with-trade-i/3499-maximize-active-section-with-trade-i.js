/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let activeCnt = 0;
    for (const e of s) if (e === '1') activeCnt++;

    const copy = '1' + s + '1';

    const arr = Array();
    let cnt = 0;

    for (let i = 0; i < copy.length; i++) {
        if (copy[i] === '0') cnt++;
        else if (copy[i] === '1' && cnt > 0) {
            arr.push(cnt);
            cnt = 0;
        };
    };

    console.log(arr)

    if (arr.length < 1) return activeCnt;
    
    let maxCnt = 0;
    for (let a = 0; a < arr.length - 1; a++) {
        maxCnt = Math.max(maxCnt, arr[a] + arr[a + 1]);
    };

    return activeCnt + maxCnt;
};