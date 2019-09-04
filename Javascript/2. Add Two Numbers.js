// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
    // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    // Output: 7 -> 0 -> 8
    // Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {

    let list1 = l1
    let list2 = l2

    let res = new ListNode(0)
    let listRes = res

    let num = 0

    while (list1 || list2) {

        if (list1 && list2) {
            num += list1.val + list2.val
            list1 = list1.next
            list2 = list2.next
        } else if (list1 && !list2) {
            num += list1.val
            list1 = list1.next
        } else if (!list1 && list2) {
            num += list2.val
            list2 = list2.next
        }

        if (num >= 10) {
            listRes.next = new ListNode(num - 10)
            num = 1
        } else {
            listRes.next = new ListNode(num)
            num = 0
        }

        listRes = listRes.next

    }

    if (num > 0) listRes.next = new ListNode(num)

    return res.next
};
// Runtime: 112 ms, faster than 73.23 % of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 38.5 MB, less than 44.44 % of JavaScript online submissions for Add Two Numbers.