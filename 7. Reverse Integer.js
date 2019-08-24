// Given a 32 - bit signed integer, reverse digits of an integer.

// Example 1:
    // Input: 123
    // Output: 321

// Example 2:
    // Input: -123
    // Output: -321

// Example 3:
    // Input: 120
    // Output: 21
// Note:
    // Assume we are dealing with an environment which could only store integers within the 32 - bit signed integer range: [−231, 231 − 1].
    // For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

function reverse(x) {
    const limit = 2147483647
    const k = x > 0 ? 1 : -1
    const n = Number(String(Math.abs(x)).split('').reverse().join(''))

    return n > limit ? 0 : n * k
}
// Runtime: 68 ms, faster than 89.83 % of JavaScript online submissions for Reverse Integer.
// Memory Usage: 36.1 MB, less than 17.71 % of JavaScript online submissions for Reverse Integer.