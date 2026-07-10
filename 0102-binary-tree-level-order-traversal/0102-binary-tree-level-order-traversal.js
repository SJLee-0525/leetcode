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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = Array();

    const search = (node, lv) => {
        if (node === null) return;

        if (res.length <= lv) res.push([node.val]);
        else res[lv].push(node.val);
        search(node.left, lv + 1);
        search(node.right, lv + 1);
    };

    search(root, 0);

    return res;
};