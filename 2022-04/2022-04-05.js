// 8 kyu
// You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
    return a.includes(x);
  }

// 8 kyu
// How good are you really?
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let total = classPoints.concat(yourPoints)
    let average = total.reduce((a,c)=>a+c,0) / total.length
    if (yourPoints > average){
      return true
    }else{
      return false
    } 
  }

// 8 kyu
// Find numbers which are divisible by given number
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
function divisibleBy(numbers, divisor){
    return numbers.filter(x => x%divisor==0 ) 
  }

// 8 kyu
// Type of sum
// Return the type of the sum of the two arguments
function typeOfSum(a, b) {
    // good luck
    if (typeof(a) == 'string' || typeof(b) == 'string'){
      return 'string'
    }else{
      return 'number'
    }   
  }

// 8 kyu
// Difference of Volumes of Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.
function findDifference(a, b) {
    let cubeA = a.reduce((a,c)=>a*c)
    let cubeB = b.reduce((a,c)=>a*c)
    if(cubeA > cubeB){
      return cubeA -cubeB
    }else{
      return cubeB -cubeA 
    }   
  }