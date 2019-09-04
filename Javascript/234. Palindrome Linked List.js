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

// 1
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
// Runtime: 64 ms, faster than 65.56 % of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 49 MB, less than 20.00 % of JavaScript online submissions for Palindrome Linked List.

// 2
function isPalindrome(head) {
    if (!head || !head.next) return true;
    let firstHalf = ""
    let secondHalf = ""

    let slow = head
    let fast = head

    while (fast && fast.next) {
        firstHalf += slow.val
        slow = slow.next
        fast = fast.next.next

        if (fast && !fast.next) {
            firstHalf += slow.val
        }
    }

    while (slow) {
        secondHalf = slow.val + secondHalf
        slow = slow.next
    }

    return firstHalf === secondHalf
}
// Runtime: 64 ms, faster than 65.53 % of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 41.9 MB, less than 20.00 % of JavaScript online submissions for Palindrome Linked List.