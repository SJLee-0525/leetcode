/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root.left === null && root.right === null) return true;
    if (root.left === null || root.right === null || root.left.val !== root.right.val) return false;

    const leftHistory = Array();
    const searchLeft = (node) => {
        if (node === null) {
            leftHistory.push(null);
            return;
        };

        leftHistory.push(node.val);
        searchLeft(node.left);
        searchLeft(node.right);
    };
    
    const rightHistory = Array();
    const searchRight = (node) => {
        if (node === null) {
            rightHistory.push(null);
            return;
        };
        
        rightHistory.push(node.val)
        searchRight(node.right);
        searchRight(node.left);
    };
    
    searchLeft(root.left);
    searchRight(root.right);
    
    for (let i = 0; i < leftHistory.length; i++) {
        if (leftHistory[i] !== rightHistory[i]) return false;  
    };
    return true;
};