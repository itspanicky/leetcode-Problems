// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral, just two one's added together. 
// Twelve is written as, XII, which is simply X + II. 
// The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.However, the numeral for four is not IIII.Instead, the number four is written as IV.Because the one is before the five we subtract it making four.The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:

// I can be placed before V(5) and X(10) to make 4 and 9.
// X can be placed before L(50) and C(100) to make 40 and 90.
// C can be placed before D(500) and M(1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.Input is guaranteed to be within the range from 1 to 3999.

// Example 1:
// Input: "III"
// Output: 3

// Example 2:
// Input: "IV"
// Output: 4

// Example 3:
// Input: "IX"
// Output: 9

// Example 4:
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.

// Example 5:
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


var romanToInt = function (s) {
    let sym = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let digitCount = 0
    let num = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            if (s[i + 1] === "I") {
                digitCount += sym[s[i]]
            } else if (s[i + 1] === "V") {
                num += 4
                i++
            } else if (s[i + 1] === "X") {
                num += 9
                i++
            } else {
                num += digitCount + 1
                digitCount = 0
            }
        } else if (s[i] === "X") {
            if (s[i + 1] === "L") {
                num += 40
                i++
            } else if (s[i + 1] === "C") {
                num += 90
                i++
            } else {
                num += sym[s[i]]
            }
        } else if (s[i] === "C") {
            if (s[i + 1] === "D") {
                num += 400
                i++
            } else if (s[i + 1] === "M") {
                num += 900
                i++
            } else {
                num += sym[s[i]]
            }
        } else {
            num += sym[s[i]]
        }
    }
    return num
};
// Runtime: 128 ms, faster than 95.54 % of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40.8 MB, less than 10.64 % of JavaScript online submissions for Roman to Integer.

function romanToInt(s) {
    let sym = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let num = 0

    for (let i = 0; i < s.length; i++) {
        let curr = sym[s[i]]
        let next = sym[s[i + 1]] || 0
        let sign = curr < next ? -1 : 1     // because roman integers are written from largest to smallest - unless for exceptions
        num += sign * curr
    }

    return num
}
// Runtime: 144 ms, faster than 62.85 % of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40 MB, less than 44.68 % of JavaScript online submissions for Roman to Integer.