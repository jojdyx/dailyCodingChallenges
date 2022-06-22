// 7 kyu
// Make a function that does arithmetic!
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
// A few examples:(Input1, Input2, Input3 --> Output)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!
function arithmetic(a, b, operator){
    switch(operator){
        case 'add':
          return a+b
        case 'subtract':
          return a-b
        case 'multiply':
          return a*b
        case 'divide':
          return a/b
    }
}


// 7 kyu
// Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
function sumDigits(number) {
    return Array.from(String(Math.abs(number)), Number).reduce((a,c)=>a+c,0)
}

// 7 kyu
// Two Oldest Ages
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// For example (Input --> Output):
// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]
function twoOldestAges(ages){
    return ages.sort((a,b)=>a-b).slice(ages.length-2, ages.length)
}