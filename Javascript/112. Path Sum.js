// Given a binary tree and a sum, determine if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.

//     Note: A leaf is a node with no children.

function hasPathSum(root, sum) {
    if (!root) return false

    if (root.left == null && root.right == null) return sum == root.val

    return (root.left != null && hasPathSum(root.left, sum - root.val))
        || (root.right != null && hasPathSum(root.right, sum - root.val))
}
// Runtime: 56 ms, faster than 95.45 % of JavaScript online submissions for Path Sum.
// Memory Usage: 37.2 MB, less than 88.89 % of JavaScript online submissions for Path Sum.