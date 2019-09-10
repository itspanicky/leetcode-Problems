// Given a set of candidate numbers(candidates)(without duplicates) and a target number(target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

//     Note:

// All numbers(including target) will be positive integers.
// The solution set must not contain duplicate combinations.
//     Example 1:

// Input: candidates = [2, 3, 6, 7], target = 7,
//     A solution set is:
// [
//     [7],
//     [2, 2, 3]
// ]
// Example 2:

// Input: candidates = [2, 3, 5], target = 8,
//     A solution set is:
// [
//     [2, 2, 2, 2],
//     [2, 3, 3],
//     [3, 5]
// ]


var combinationSum = function (candidates, target) {

    candidates.sort((x, y) => x - y)
    let res = []

    function helper(index, n, arr) {
        if (n > target) return
        if (n === target) {
            res.push([...arr])
            return
        }

        for (let i = index; i < candidates.length; i++) {
            arr.push(candidates[i])
            helper(i, n + candidates[i], arr)
            arr.pop()

        }
        return res
    }

    return helper(0, 0, [])
};
// Runtime: 72 ms, faster than 77.18 % of JavaScript online submissions for Combination Sum.
// Memory Usage: 36.8 MB, less than 66.67 % of JavaScript online submissions for Combination Sum.