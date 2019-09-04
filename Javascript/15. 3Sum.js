// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
    // Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
    // [
    //     [-1, 0, 1],
    //     [-1, -1, 2]
    // ]

function threeSum(nums) {
    let res = []
    if (nums.length < 3) return res
    let sorted = nums.sort( (x,y) => x - y)     // makes function faster

    for (let i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] > 0) break;       // triple must need at least one negative num to get 0
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;     // filter out duplicates

        let j = i + 1   // left num
        let k = sorted.length - 1   // right num

        while (k > j) {
            let num1 = sorted[i]
            let num2 = sorted[j]
            let num3 = sorted[k]
            let sum = num1 + num2 + num3
            if (sum === 0) {
                res.push([num1, num2, num3])
                while (num2 === sorted[j + 1]) j++  // filter out duplicates
                while (num3 === sorted[k - 1]) k--  // filter out duplicates
                j++
                k--
            } else if (sum > 0) {
                k--
            } else if (sum < 0) {
                j++
            }
        }
    }

    return res
}
// Runtime: 160 ms, faster than 69.68 % of JavaScript online submissions for 3Sum.
// Memory Usage: 46.4 MB, less than 90.00 % of JavaScript online submissions for 3Sum.