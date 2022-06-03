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

// 8 kyu
// Squash the bugs
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.
function findLongest(str) {
    var spl = str.split(" ");
    var longest = 0  
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
      return longest 
}

// 8 kyu
// Convert to Binary
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:
// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */
function toBinary(n){
    return Number(n.toString(2));
}

// 8 kyu
// repeatIt
// Create a function that takes a string and an integer (n).
// The function should return a string that repeats the input string n number of times.
// If anything other than a string is passed in you should return "Not a string"
// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"
var repeatIt = function(str, n) {
    return typeof(str) == 'string' ? str.repeat(n) : 'Not a string'
}