// 8 kyu
// Grader
// Create a function that takes a number as an argument and returns a grade based on that number.
// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:
// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"
function grader(score) {
    if(score > 1 || score < 0.6){
      return 'F'
    }else if (score >= 0.9){
      return 'A'
    }else if (score >= 0.8){
      return 'B'
    }else if (score >= 0.7){
      return 'C'
    }else if (score >= 0.6){
      return 'D'
    }   
  }

// 8 kyu
// Barking mad
// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.
function Dog (breed) {
    this.breed = breed;
  }

Dog.prototype.bark = function(){
  return "Woof"
}
  var snoopy = new Dog("Beagle");
  
  var scoobydoo = new Dog("Great Dane");
  
  // scoobydoo.bark = function() {
  //   return "Woof";
  // };  

//  8 kyu
//  Grasshopper - Object syntax debug
// Object debugging
// While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}

// 8 kyu
// Be Concise III - Sum Squares
// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:
// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.
// A few hints:
// Try researching about built-in Array methods; they may help shorten your code a lot
// Good luck!
function sumSquares(array) {
    //original code below on comment
    //   var result = 0;
    //   for (let i = 0; i < array.length; i++) {
    //     result += array[i] ** 2;
    //   }
    //   return result;
        return array.map(i=>i*i).reduce((a,c)=> a+c)
    }