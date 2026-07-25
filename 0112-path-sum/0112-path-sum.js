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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const trav = (node, sum) => {
        if (!node.left && !node.right) {
            if (sum === targetSum) return true;
            return false;
        };

        let left = false, right = false;
        if (node.left) left = trav(node.left, sum + node.left.val) 
        if (node.right) right = trav(node.right, sum + node.right.val);
        return left || right
    };

    if (!root) return false;
    return trav(root, root.val);
};