// 8 kyu
// Training JS #4: Basic data types--Array
// In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]
// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.
// Each element in the array has an index, use arr[index] to get the value of element.
// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:
// var arr=[1,2,3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]
// Task
// I've written five function, each function receives a parameter: arr(an array), you should code something with arr.
//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// In the end, click "Submit" to submit your code pass this kata.
function getLength(arr){
    //return length of arr
    return arr.length
}
function getFirst(arr){
    //return the first element of arr
    return arr[0]
}
function getLast(arr){
    //return the last element of arr
    let last = arr.pop()
    return last
}
function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    return arr
}
function popElement(arr){
    //pop an element from arr
    arr.pop()
    return arr
}

// 8 kyu
// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    return numbers.map((x)=>Math.pow(x,2)).reduce((a,c) => a+c,0)
}

// 8 kyu
// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
function makeNegative(num) {
    if (num <= 0){
      return num
    }else{
      return -num
    }
}

// 8 kyu
// You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    return i*2;
}

// 8 kyu
// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]
function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// 8 kyu
// Calculate average
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
function find_average(array) {
    if(array.length < 1){
      return 0
    }else{
      return array.reduce((a,c)=>a+c,0) / array.length;
    }
}

// 8 kyu
// Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
function isDivisible(n, x, y) {
    if (n%x==0 && n%y==0){
      return true
    }else{
      return false
    }
}

// 8 kyu
// What's the real floor?
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.
// More information here
// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3
function getRealFloor(n) {
    if(n<1){
      return n
    }else if (n<13){
      return n-1
    }else if (n>13){
      return n-2
    }
}

// 8 kyu
// Is it even?
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
function testEven(n) {
  return n%2==0 ? true : false
}