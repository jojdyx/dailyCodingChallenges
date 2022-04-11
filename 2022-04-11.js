// 8 kyu
// Fundamentals: Return
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// Please use the following function names:
// addition = add
// multiply = multiply
// division = divide (both integer and float divisions are accepted)
// modulus = mod
// exponential = exponent
// subtraction = subt
// Note: All math operations will be: a (operation) b
function add(a,b){
    return a+b
}
function divide(a,b){
    return a/b
}
function multiply(a,b){
    return a*b
}
function mod(a,b){
    return a%b
}  
function exponent(a,b){
    return a**b
}   
function subt(a,b){
    return a-b
}

// 8 kyu
// Name Shuffler
// Write a function that returns a string in which firstname is swapped with last name.
// nameShuffler('john McClane'); => "McClane john"
function nameShuffler(str){
    //Shuffle It
    let newStr = str.split(' ').reverse().join(' ')
    return newStr
  }

// 8 kyu
// Short Long Short
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
// Hint for R users:
// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
function solution(a, b){
    // your code here
    if(a.length > b.length){
      return b+a+b
    }else{
      return a+b+a
    }
  }

// 8 kyu
// Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      return Number(inputString[0])
    }

// 8 kyu
// Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!
function oddCount(n){
    // your code here
    return Math.floor(n/2)
  }

// 8 kyu
// Sentence Smash
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
function smash (words) {
    return words.join(' ')
 };