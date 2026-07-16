/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const N = board.length, M = board[0].length;

    const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];

    let res = false;
    const path = Array();
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    const dfs = (i, j) => {
        if (path.length === word.length) {
            if (path.join("") === word) res = true;
            return;
        };

        for (let k = 0; k < 4; k++) {
            const ni = i + DI[k], nj = j + DJ[k];

            if (ni < 0 || N <= ni || nj < 0 || M <= nj 
                || visited[ni][nj] || board[ni][nj] !== word[path.length]) continue;

            visited[ni][nj] = true;
            path.push(board[ni][nj]);
            dfs(ni, nj);
            path.pop();
            visited[ni][nj] = false;
        };
    };

    for (let si = 0; si < N; si++) {
        for (let sj = 0; sj < M; sj++) {
            visited[si][sj] = true;
            path.push(board[si][sj]);
            dfs(si, sj);
            path.pop();
            visited[si][sj] = false;

            if (res) return true;
        };
    };

    return false;
};