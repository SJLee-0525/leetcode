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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = Array();
    const path = Array();

    const trav = (node, sum) => {
        path.push(node.val);

        if (node.left) trav(node.left, sum + node.left.val);
        if (node.right) trav(node.right, sum + node.right.val);

        if (!node.left && !node.right) {
            if (sum === targetSum) res.push([...path]);
        };

        path.pop();
    };

    if (!root) return [];
    
    trav(root, root.val);
    return res;
};