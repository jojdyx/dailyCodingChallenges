// 8 kyu
// Swap Values
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?
function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

// 8 kyu
// Bin to Decimal
// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin){
    return parseInt(bin, 2)
}

// 8 kyu
// Is the string uppercase?
// Is the string uppercase?
// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase() ? true : false
}