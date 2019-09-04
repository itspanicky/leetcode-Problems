// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position(0 - indexed) in the linked list where tail connects to.If pos is - 1, then there is no cycle in the linked list.

// Example 1:
// Input: head = [3, 2, 0, -4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

function hasCycle(head) {
    let a = head, b = head

    while (b && b.next) {
        a = a.next
        b = b.next.next

        if (b === a) {
            return true
        }
    }
    return false
}
// Runtime: 72 ms, faster than 31.51 % of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 36.8 MB, less than 56.25 % of JavaScript online submissions for Linked List Cycle.

var hasCycle = function (head) {

    while (head) {
        if (head.hasVisited) {
            return true
        }

        head.hasVisited = true
        head = head.next
    }

    return false
};
// Runtime: 60 ms, faster than 92.37 % of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 38 MB, less than 6.25 % of JavaScript online submissions for Linked List Cycle.