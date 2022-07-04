// 7 kyu
// Gauß needs help! (Sums of a lot of numbers).
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).
// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code. 
// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.
function f(n){
    return Number.isInteger(n) == true && n > 0 ? (n+1)*n/2 : false
}