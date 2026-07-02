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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;
    
    const search = (node, depth) => {
        if (node === null) return;
        
        if (maxDepth < depth) maxDepth = depth;
        
        search(node.left, depth + 1);
        search(node.right, depth + 1);
    };
    
    search(root, 1);
    return maxDepth;
};