/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const minDists = Array(n + 1).fill(Infinity);
    const parents = Array.from({ length: n + 1 }, (_, i) => i);

    const findParent = (x) => {
        if (x === parents[x]) return x;

        parents[x] = findParent(parents[x]);
        return parents[x];
    };

    const union = (x, y) => {
        const rootX = findParent(x);
        const rootY = findParent(y);

        if (rootX === rootY) return;

        if (rootX < rootY) parents[rootX] = rootY;
        else parents[rootY] = rootX;
    };

    for (const [a, b, d] of roads) {
        if (minDists[a] > d) minDists[a] = d;
        if (minDists[b] > d) minDists[b] = d;
        union(a, b);
    };

    const targetRoot = findParent(n);
    let ret = Infinity;
    
    for (let i = 1; i <= n; i++) {
        if (findParent(i) === targetRoot && ret > minDists[i]) ret = minDists[i];
    };

    return ret;
};