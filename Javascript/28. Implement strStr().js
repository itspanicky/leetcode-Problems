// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string ? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string.This is consistent to C's strstr() and Java's indexOf().

var strStr = function (haystack, needle) {
    // return haystack.indexOf(needle)

    if (needle === "") return 0
    if (needle.length > haystack.length) return -1

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let k = 0
            let j = 0
            idx = i
            while (haystack[i + k] === needle[j]) {
                if (j === needle.length - 1) return idx
                k++
                j++
            }
        }

    }

    return -1
};
// Runtime: 3696 ms, faster than 5.01 % of JavaScript online submissions for Implement strStr().
// Memory Usage: 35 MB, less than 46.43 % of JavaScript online submissions for Implement strStr().