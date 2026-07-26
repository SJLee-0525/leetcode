/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const parents = Array.from({ length: n }, (_, i) => i);
    const edgesCnt = Object.fromEntries(
        Array.from({ length: n }, (_, i) => [i, 0])
    );

    function find(x) {
        if (x === parents[x]) return x;

        parents[x] = find(parents[x]);
        return parents[x];
    };

    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);

        if (rootA === rootB) {
            edgesCnt[rootA] += 1;
        } else if (rootA < rootB) {
            parents[rootB] = rootA;
            edgesCnt[rootA] += edgesCnt[rootB] + 1;
        } else {
            parents[rootA] = rootB;
            edgesCnt[rootB] += edgesCnt[rootA] + 1;
        };
    };

    function secondUnion(a, b) {
        const rootA = find(a);
        const rootB = find(b);

        if (rootA === rootB) return;
        else if (rootA < rootB) parents[rootB] = rootA;
        else parents[rootA] = rootB;
    };

    for (let e = 0; e < edges.length; e++) {
        const [a, b] = edges[e];
        union(a, b);
    };

    for (let e = 0; e < edges.length; e++) {
        const [a, b] = edges[e];
        secondUnion(a, b);
    };

    const parentsEdgesCnt = {};
    for (const par of parents) {
        if (parentsEdgesCnt[par]) parentsEdgesCnt[par]++;
        else parentsEdgesCnt[par] = 1;
    };

    let res = 0;
    
    for (const [par, cnt] of Object.entries(parentsEdgesCnt)) {
        if ((cnt * (cnt - 1)) / 2 === edgesCnt[par]) res++;
    };

    return res;
};