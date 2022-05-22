// 8 kyu
// Can we divide it?
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true
function isDivideBy(number, a, b) {
    // good luck
    if(number % a == 0 && number % b == 0){
      return true
    }else{
      return false
    }
}

// 8 kyu
// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
    let checkName = name.toLowerCase().charAt(0)
    if(checkName == 'r'){
      return `${name} plays banjo`
    }else{
    return `${name} does not play banjo`
    }
}

// 8 kyu
// Reverse List Order
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
function reverseList(list) {
    return list.reverse()
}

// 8 kyu
// Sum The Strings
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
function sumStr(a,b) {
    let total = (+a) + (+b)
    return `${total}`
}

// 8 kyu
// Basic variable assignment
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a = "code";
var b = "wa.rs";
var name = a + b;

// 8 kyu
// Grasshopper - Grade book
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
    let average = (s1+s2+s3)/3   
    if(average <= 100 && average >=90 ){
      return 'A'
    }else if (average < 90 && average >=80  ){
      return 'B'
    }else if (average < 80 && average >=70){
      return 'C'
    }else if (average < 70 && average >=60){
      return 'D'
    }else if (average < 60 && average >=0){
      return 'F'
    }
}

// 8 kyu
// Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
function otherAngle(a, b) {
    let total = 180;
    return total - a - b;
}

// 8 kyu
// Beginner Series #4 Cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
    let cm = s * 100000 / 3600
    return Math.floor(cm)
}

// 8 kyu
// L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true
function setAlarm(employed, vacation){
    if(employed == true && vacation == true){
      return false
    }else if (employed == false && vacation == true){
      return false
    }else if (employed == false && vacation == false){
      return false
    }else if (employed == true && vacation == false){
      return true
    }
}