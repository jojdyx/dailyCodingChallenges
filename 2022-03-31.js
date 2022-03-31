// 8 kyu
// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x){
    return x.map(x => Number(x)).reduce((acc,count) => acc+count , 0)
}

// 8 kyu
// Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
}

// 8 kyu
// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    return x.reduce((a,c)=> a*c)
}

// 8 kyu
// Basic Training: Add item to an Array
// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]
// The websites array has already been defined for you using the following code:
// var websites = [];
websites.push("codewars")

// 8 kyu
// Grasshopper - Array Mean
// Find Mean
// Find the mean (average) of a list of numbers in an array.
// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
// For an example list of 1, 3, 5, 7
// 1. Add all of the numbers
// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
// 16/4 = 4
// 3. The mean (or average) of this list is 4
var findAverage = function (nums) {
        return nums.reduce((a,c)=>a+c) / nums.length
}

// 8 kyu
// SpeedCode #2 - Array Madness
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!
function arrayMadness(a, b) {
    if(a.map(x => x*x).reduce((a,c)=>a+c) > b.map(x => x*x*x).reduce((a,c)=>a+c)){
      return true
    }else{
      return false
    }
}  