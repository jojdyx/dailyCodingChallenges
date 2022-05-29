// 8 kyu
// To square(root) or not to square(root)
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
function squareOrSquareRoot(array) {
    return array.map(x=> Math.sqrt(x) % 1 ? x*x : Math.sqrt(x));  
}

// 8 kyu
// No zeros for heros
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway
function noBoringZeros(n) {
    return n.toString().endsWith(0) ? Number(n.toString().replace(/0+$/, '')) : n
}