// 8 kyu
// String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr (n, s) {
    let str = '' // an empty str
    for (let i =1 ; i <=n ; i++){
        str += s
    }
      return str
  }

// 8 kyu
// If you can't sleep, just count sheep!!
// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
    //your code here
      let str = ''
      for (let i =1; i<=num; i++){
        str += (i+' sheep...')
    }
      return str
  }

// 8 kyu
// Count the Monkeys!
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example:
// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]
function monkeyCount(n) {
    // your code here
      let arr = []
      for (let i = 1; i<= n ; i++){
          arr.push(i)
      }    
        return arr
    }

// 8 kyu
// What is between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
    // your code here
    let arr = [];
    for (let i = a; i<=b; i++){
      arr.push(i)
    }
      return arr
  }

// 8 kyu
// Grasshopper - Summation
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
var summation = function (num) {
    // Code here
    let sum=0
    for (let i = 1; i<=num; i++){
        sum += i
    }
      return sum
  }

// 8 kyu
// Power
// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.
function numberToPower(number, power){
  // Code here
  let num = 1;
  for (let i = 1; i<=power ; i++){ //how many time the for loop go
     num*= number  // num = num * number, the number * 1 equal number it self then times itself
  }
  return num
}