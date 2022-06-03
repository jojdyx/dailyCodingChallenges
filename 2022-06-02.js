// 8 kyu
// Is it a number?
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
// Valid examples, should return true:
// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:
// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")
function isDigit(s) {
    return s == parseFloat(s) ? true : false
}

// 8 kyu
// No Loops 2 - You only need one
// *** No Loops Allowed ***
// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
function check(a,x){
    return a.includes(x) ? true : false
}