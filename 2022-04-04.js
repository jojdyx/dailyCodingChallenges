// 8 kyu
// Return the day
// Complete the function which returns the weekday according to the input number:
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"
function whatday(num) { 
    if(num == 1){
      return'Sunday';
    }else if(num == 2){
      return 'Monday'
    }else if(num == 3){
      return 'Tuesday'
    }else if(num == 4){
      return 'Wednesday'
    }else if(num == 5){
      return 'Thursday'
    }else if(num == 6){
      return 'Friday'
    }else if(num == 7){
      return 'Saturday'
    }else{
      return 'Wrong, please enter a number between 1 and 7'
    }
  }

// 8 kyu
// For Twins: 1. Types
// Prolog:
// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!
// Task:
// Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
// Examples:
// typeValidation(42, "number");   // => true
// typeValidation("42", "number"); // => false
function typeValidation(variable, type) {
    if (typeof(variable) == type){
      return true
    }else{
      return false
    }
  }

// 8 kyu
// Find out whether the shape is a cube
// To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length * Width * Height
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
// Note: the sides must be integers
var cubeChecker = function(volume, side){
    if(volume > 0 && side >0){
      if (volume / side / side == side){
         return true;
      }else{
        return false;   
      }    
    }
    return false;
  };

// 8 kyu
// Keep Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
function litres(time) {
    return Math.floor(time/2);
  }