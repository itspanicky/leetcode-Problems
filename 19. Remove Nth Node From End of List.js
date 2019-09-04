// Given a linked list, remove the n - th node from the end of list and return its head.

// Example:
// Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.
// After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5.

// Note:
// Given n will always be valid.

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */

var removeNthFromEnd = function(head, n) {
    let fastHead = head
    let slowHead = head
    for (let i = 0; i < n; i++) {
        fastHead = fastHead.next
    }

    if (fastHead === null) return slowHead.next     // ex) head = [1], n = 1, return slowHead.next = []

    while (fastHead.next) {
        fastHead = fastHead.next
        slowHead = slowHead.next
    }

    slowHead.next = slowHead.next.next

    return head
};
// Runtime: 60 ms, faster than 58.27 % of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 34.3 MB, less than 13.64 % of JavaScript online submissions for Remove Nth Node From End of List.