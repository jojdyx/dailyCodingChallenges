// 7 kyu
// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b)=> b-a).join(''))
}

// 6 kyu
// Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function(n) {
    return Number(n.toString(2).split('').reduce((a,c) => +a + +c,0))
}

// 7 kyu
// Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b)=>a-b).slice(0,2).reduce((a,c)=>a+c,0)
}