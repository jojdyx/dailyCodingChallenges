// 8 kyu
// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string
function fakeBin(x){
    return x.replace(/[1234]/g, 0).replace(/[56789]/g,1)
}

// 8 kyu
// All Star Code Challenge #18
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1
function strCount(str, letter){  
    return str.split('').filter(x => x==letter).length
}