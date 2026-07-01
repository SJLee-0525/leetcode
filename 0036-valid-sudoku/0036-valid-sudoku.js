/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let check = Array.from({ length: 2 }, () => Array(10).fill(0));
        
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                const num = Number(board[i][j]);
                
                if (check[0][num] === 0) check[0][num]++;
                else return false;
            };
            
            if (board[j][i] !== ".") {
                const num = Number(board[j][i]);
                
                if (check[1][num] === 0) check[1][num]++;
                else return false;
            };
            
            if (i % 3 === 0 && j % 3 === 0) {
                const checkBox = Array(10).fill(0);
                
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        if (board[i + k][j + l] !== ".") {
                            const num = Number(board[i + k][j + l]);
                            
                            if (checkBox[num] === 0) checkBox[num]++;
                            else return false;
                        };
                    };
                };
            };
        };
    };
    
    return true
};