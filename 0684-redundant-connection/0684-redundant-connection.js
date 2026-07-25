/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const N = edges.length;

    const parents = Array.from({ length: N + 1 }, (_, i) => i);

    const findParent = (x) => {
        if (x === parents[x]) return x;

        parents[x] = findParent(parents[x]);
        return parents[x];
    };

    const union = (a, b) => {
        const rootA = findParent(a);
        const rootB = findParent(b);

        if (rootA === rootB) return true;

        if (rootA < rootB) parents[rootB] = rootA;
        else parents[rootA] = rootB;

        return false;
    };

    for (const [a, b] of edges) {
        const tmp = union(a, b);

        if (tmp) return [a, b];
    };
};