// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
    // Given nums = [2, 7, 11, 15], target = 9,
    // Because nums[0] + nums[1] = 2 + 7 = 9,
    // return [0, 1].


// 1
// function twoSum(nums, target) {
//     let table = new Array(nums.length)

//     for (let i = 0; i < nums.length; i++) {
//         if (table.indexOf(nums[i]) !== -1) {
//             return [table.indexOf(nums[i]), i]
//         } else 
//         {
//             table[i] = target - nums[i]
//         }
//     }
// }
// Runtime: 140 ms, faster than 25.54 % of JavaScript online submissions for Two Sum.
// Memory Usage: 34.9 MB, less than 33.89 % of JavaScript online submissions for Two Sum.

// 2
function twoSum(nums, target) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            return [hash[nums[i]], i]
        } else {
            hash[target - nums[i]] = i
        }
    }
}
// Runtime: 52 ms, faster than 92.58 % of JavaScript online submissions for Two Sum.
// Memory Usage: 34.4 MB, less than 93.80 % of JavaScript online submissions for Two Sum.