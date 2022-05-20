// 8 kyu
// Convert a String to a Number!
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
var stringToNumber = function(str){
    if (str === NaN){
      return null;
    } else{
      return Number(str);
    }
}

// 8 kyu
// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    if ( bool === true){
      return 'Yes';
    }else{
      return 'No';
    }
}