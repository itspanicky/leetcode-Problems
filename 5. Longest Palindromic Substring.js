// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function (s) {
    if (s.length <= 1) return s

    var isPalindrome = function (subStr) {

        for (let i = 0; i < subStr.length; i++) {

            if (subStr[i] !== subStr[subStr.length - 1 - i]) {
                return false
            }
        }

        return true
    }

    let longestPalin = ""

    for (let start = 0; start < s.length; start++) {
        for (let end = s.length; end > start; end--) {
            let subStr = s.substring(start, end)
            if (subStr.length > longestPalin.length && isPalindrome(subStr)) {
                longestPalin = subStr
            }
        }
    }

    return longestPalin

};
Runtime: 484 ms, faster than 17.62 % of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 37.4 MB, less than 52.17 % of JavaScript online submissions for Longest Palindromic Substring.