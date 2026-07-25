/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = Array(isConnected.length).fill(0);

    const dfs = (c) => {
        visited[c] = 1;

        for (let n = 0; n < isConnected.length; n++) {
            if (n === c || !isConnected[c][n] || visited[n]) continue;

            dfs(n);
        };
    };

    let res = 0;
    for (let s = 0; s < isConnected.length; s++) {
        if (!visited[s]) {
            dfs(s);
            res++;
        };
    };

    return res;
};