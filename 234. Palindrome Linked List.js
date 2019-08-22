// Given a singly linked list, determine if it is a palindrome.
    // Example 1:
        // Input: 1 -> 2
        // Output: false

    // Example 2:
        // Input: 1 -> 2 -> 2 -> 1
        // Output: true

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

function isPalindrome(head) {
    if (!head || !head.next) return true;

    let node = head
    let str = ""
    let reverseStr = ""
    while (node) {
        str += node.val
        reverseStr = node.val + reverseStr
        node = node.next
    }

    return str === reverseStr
}