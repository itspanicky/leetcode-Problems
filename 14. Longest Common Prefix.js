// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower", "flow", "flight"]
// Output: "fl"

// Example 2:
// Input: ["dog", "racecar", "car"]
// Output: ""

// Explanation: There is no common prefix among the input strings.
// Note: All given inputs are in lowercase letters a - z.

var longestCommonPrefix = function (strs) {
    let prefix = ""
    if (strs.length === 0) return prefix

    for (let charIdx = 0; charIdx < strs[0].length; charIdx++) {

        for (let wordIdx = 1; wordIdx < strs.length; wordIdx++) {
            if (strs[0][charIdx] !== strs[wordIdx][charIdx]) {
                return prefix
            }
        }

        prefix += strs[0][charIdx]
    }
    return prefix
};
// Runtime: 60 ms, faster than 58.21 % of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.3 MB, less than 25.00 % of JavaScript online submissions for Longest Common Prefix.