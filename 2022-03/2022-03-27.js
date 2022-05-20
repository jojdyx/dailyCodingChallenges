// 8 kyu
// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
     let newStr = str.slice(1,-1)
     return newStr;
}

// 8 kyu
// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    let newStr = x.split(' ').join('')
    return newStr;
}

// 8 kyu
// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    if (x.toLowerCase() === x.split('').reverse().join('').toLowerCase()){
      return true
    }else{
      return false
    }
}