class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};


class CustomQueue {
    constructor() {
        this.init();
    };

    init() {
        this.size = 0;
        this.start = null;
        this.end = null;
    };

    append(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.start = node;
            this.end = node;
        } else {
            this.end.next = node;
            this.end = node;
        };

        this.size++;
        return;
    };

    popLeft() {
        if (this.size === 0) return null;
        
        const ret = this.start.val;

        if (this.size === 1) {
            this.init();
        } else {
            this.start = this.start.next;
            this.size--;
        };

        return ret;
    };

    isEmpty() {
        return this.size <= 0;
    };
};


const DI = [0, 1, 0, -1], DJ = [1, 0, -1, 0];


/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const N = grid.length, M = grid[0].length;

    const visited = Array.from({ length: N }, () => Array(M).fill(-1));

    const bfs = () => {
        visited[0][0] = health - grid[0][0];

        const queue = new CustomQueue();
        queue.append([0, 0, health - grid[0][0]]);

        while (!queue.isEmpty()) {
            const [ci, cj, ch] = queue.popLeft();

            for (let k = 0; k < 4; k++) {
                const ni = ci + DI[k], nj = cj + DJ[k];
                if (ni < 0 || N <= ni || nj < 0 || M <= nj || ch - grid[ni][nj] < 1
                    || (visited[ni][nj] > 0 && visited[ni][nj] >= ch - grid[ni][nj])) continue;

                visited[ni][nj] = ch - grid[ni][nj];
                queue.append([ni, nj, ch - grid[ni][nj]]);
            };
        };
    };

    bfs();
    
    return visited[N - 1][M - 1] !== -1;
};