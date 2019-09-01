// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s) {
    let i = 0;
    let count = 0;
    let subStr = ""

    while (i < s.length) {
        if (subStr.includes(s[i])) {
            subStr = subStr.slice(1)
        } else {
            subStr += s[i]
            count = Math.max(count, subStr.length)
            i++
        }
    }
    return count
}
// Runtime: 92 ms, faster than 71.41 % of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 40.1 MB, less than 62.83 % of JavaScript online submissions for Longest Substring Without Repeating Characters.