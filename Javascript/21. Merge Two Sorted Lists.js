// Merge two sorted linked lists and return it as a new list.The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1 -> 2 -> 4, 1 -> 3 -> 4
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let node1 = l1
    let node2 = l2

    let result = new ListNode(0)
    let resultNode = result

    while (node1 != null || node2 != null) {
        if (node1 === null) {
            resultNode.next = new ListNode(node2.val)
            node2 = node2.next
            resultNode = resultNode.next
            continue
        }

        if (node2 === null) {
            resultNode.next = new ListNode(node1.val)
            node1 = node1.next
            resultNode = resultNode.next
            continue
        }

        resultNode.next = node1.val > node2.val ? new ListNode(node2.val) : new ListNode(node1.val)
        node1.val > node2.val ? node2 = node2.next : node1 = node1.next
        resultNode = resultNode.next
    }

    return result.next
};
// Runtime: 72 ms, faster than 25.90 % of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 36 MB, less than 17.95 % of JavaScript online submissions for Merge Two Sorted Lists.