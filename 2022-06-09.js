// 7 kyu
// Simple Fun #176: Reverse Letter
// Task
// Given a string str, reverse it omitting all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
// [output] a string
function reverseLetter(str) {
    return str.match(/[a-z]/g, '').reverse().join('')
}

// 8 kyu
// Find Nearest square number
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)),2)
}

// 8 kyu
// Be Concise IV - Index of an element in an array
// Be Concise IV - Index of an element in an array
// Task
// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
function find(a, e) {
    return a.includes(e) ? a.indexOf(e) : 'Not found'
}