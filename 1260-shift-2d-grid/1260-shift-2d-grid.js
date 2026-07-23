/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const ret = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));

    let std = grid.length * grid[0].length;

    const calIdx = (n) => {
        return [Math.floor(n / grid[0].length), n % grid[0].length];
    };

    for (let c = 0; c < std; c++) {
        const [ri, rj] = calIdx((c + k) % std);
        const [i, j] = calIdx(c);

        ret[ri][rj] = grid[i][j];
    };

    return ret;
};