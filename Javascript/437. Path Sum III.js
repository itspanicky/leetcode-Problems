// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards(traveling only from parent nodes to child nodes).

// The tree has no more than 1, 000 nodes and the values are in the range - 1, 000, 000 to 1, 000, 000.

// Example:
// root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], sum = 8

//      10
//     /  \
//     5 - 3
//    / \   \
//   3   2   11
//  / \   \
// 3 - 2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. - 3 -> 11


function pathSum(root, sum) {
    let result = 0

    const addToSum = function (node, subSum) {
        if (!node) return;
        subSum += node.val
        if (subSum === sum) result++
        addToSum(node.left, subSum)
        addToSum(node.right, subSum)
    }

    const traverseTree = function (node) {
        if (!node) return;
        addToSum(node, 0)
        traverseTree(node.left)
        traverseTree(node.right)
    }

    traverseTree(root)

    return result
}