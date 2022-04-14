// 8 kyu
// Will there be enough space?
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
function enough(cap, on, wait) {
    // your code here
    if( cap>= on+wait){
      return 0
    }else{
      return on+wait-cap
    }
  }

// 8 kyu
// Thinkful - Logic Drills: Traffic light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.
// Note: Use "" instead of '' in C++.
function updateLight(current) {
    //your code here!
    switch(current){
        case 'green':
        return 'yellow';
        break;
        case 'yellow':
        return 'red'
        break;
        case 'red':
        return 'green'
        break;
    }
  }

// 8 kyu
// Keep up the hoop
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount (n) {
    //your code goes here    
   if (n < 10){
     return 'Keep at it until you get it'
   }else{
     return 'Great, now move on to tricks'
   }
 }