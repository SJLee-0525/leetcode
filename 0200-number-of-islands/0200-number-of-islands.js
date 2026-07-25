class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class Qy {
    constructor() {
        this.init();
    };

    init() {
        this.size = 0;
        this.front = null;
        this.tail = null;
    };

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.front = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        };

        this.size++;
        return;
    };

    popleft() {
        if (this.size === 0) return null;

        const ret = this.front.val;

        if (this.size === 1) this.init();
        else {
            this.front = this.front.next;
            this.size--;
        }

        return ret;
    };

    isempty() {
        return this.size <= 0;
    };
};


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const N = grid.length, M = grid[0].length;
    const visited = Array.from({ length: N }, () => Array(M).fill(0));

    const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];

    const bfs = (si, sj, num) => {
        const queue = new Qy();
        queue.append([si, sj]);

        visited[si][sj] = num;

        while (!queue.isempty()) {
            const [ci, cj] = queue.popleft();

            for (let k = 0; k < 4; k++) {
                const ni = ci + DI[k], nj = cj + DJ[k];

                if (0 <= ni && ni < N && 0 <= nj && nj < M
                && grid[ni][nj] === "1" && !visited[ni][nj]) {
                    visited[ni][nj] = num;
                    queue.append([ni, nj]);
                };
            };
        };

        return;
    };

    let res = 1;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) bfs(i, j, res++);
        };
    };

    return res - 1;
};