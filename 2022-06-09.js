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


