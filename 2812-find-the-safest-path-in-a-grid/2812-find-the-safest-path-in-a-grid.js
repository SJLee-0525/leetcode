class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    };
};


class CustomQueue {
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

        if (this.size === 1) {
            this.init();
        } else {
            this.front = this.front.next;
            this.size--;
        };

        return ret;
    };

    isempty() {
        return this.size <= 0;
    };
};


class CustomHeap {
    constructor() {
        this.heap = [null];
    };

    heappush(val) {
        this.heap.push(val);

        if (this.heap.length === 2) return;

        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);

        while (par > 0) {
            if (this.heap[cur][0] > this.heap[par][0]) {
                [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

                cur = par;
                par = Math.floor(cur / 2);
            } else break;
        };
    };

    heappop() {
        if (this.heap.length <= 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();

        const ret = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1, left = 2, right = 3;
        while ((left < this.heap.length && this.heap[cur][0] < this.heap[left][0]) 
        || (right < this.heap.length && this.heap[cur][0] < this.heap[right][0])) {
            if (right >= this.heap.length || this.heap[left][0] >= this.heap[right][0]) {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
                cur = left;
            } else {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
                cur = right;
            };

            left = cur * 2;
            right = left + 1;
        };

        return ret;
    };

    heapsize() {
        return this.heap.length - 1;
    };
};


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
    const DI = [1, 0, -1, 0], DJ = [0, 1, 0, -1];

    const safeScore = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(Infinity));

    const initSafeScore = () => {
        const thieves = Array();

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) thieves.push([i, j]);
            };
        };

        function bfs(si, sj) {
            const queue = new CustomQueue();
            queue.append([si, sj]);

            safeScore[si][sj] = 0;

            while (!queue.isempty()) {
                const [ci, cj] = queue.popleft();

                for (let k = 0; k < 4; k++) {
                    const ni = ci + DI[k], nj = cj + DJ[k];

                    if (0 <= ni && ni < grid.length && 0 <= nj && nj < grid[0].length
                    && grid[ni][nj] === 0 && safeScore[ni][nj] > safeScore[ci][cj] + 1) {
                        safeScore[ni][nj] = safeScore[ci][cj] + 1;
                        queue.append([ni, nj]);
                    };
                };
            };

            return;
        };

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) bfs(i, j);
            };
        };
    };

    initSafeScore();

    const dijkstra = () => {
        const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(-1));
        visited[0][0] = safeScore[0][0];

        const heap = new CustomHeap();
        heap.heappush([safeScore[0][0], 0, 0]);

        while (heap.heapsize() > 0) {
            const [cost, ci, cj] = heap.heappop();

            if (visited[ci][cj] > cost) continue;

            for (let k = 0; k < 4; k++) {
                const ni = ci + DI[k], nj = cj + DJ[k];

                if (0 <= ni && ni < grid.length && 0 <= nj && nj < grid[0].length) {
                    const nextCost = Math.min(cost, safeScore[ni][nj]);
                    
                    if (nextCost > visited[ni][nj]) {
                        visited[ni][nj] = nextCost;
                        heap.heappush([nextCost, ni, nj]);
                    };
                };
            };
        };

        return visited[visited.length - 1][visited[0].length - 1];
    };

    return dijkstra();
};