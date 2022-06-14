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