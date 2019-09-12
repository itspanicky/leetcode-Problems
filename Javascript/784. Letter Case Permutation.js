// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.Return a list of all possible strings we could create.

//     Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]
// Note:

// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.


var letterCasePermutation = function (S) {
    let res = []

    let nums = "0123456789"

    function helper(idx, subStr) {
        if (idx > S.length - 1) {
            res.push(subStr)
            return
        }

        if (nums.includes(S[idx])) {
            helper(idx + 1, subStr + S[idx])
        } else {
            helper(idx + 1, subStr + S[idx].toUpperCase())
            helper(idx + 1, subStr + S[idx].toLowerCase())
        }

    }

    helper(0, "")
    return res
};
// Runtime: 76 ms, faster than 57.14 % of JavaScript online submissions for Letter Case Permutation.
// Memory Usage: 37.7 MB, less than 33.33 % of JavaScript online submissions for Letter Case Permutation.