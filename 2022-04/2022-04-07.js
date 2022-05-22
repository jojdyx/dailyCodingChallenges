// 8 kyu
// Function 2 - squaring an argument
// Now you have to write a function that takes an argument and returns the square of it.
function square (num){
    return num*num
}

// 8 kyu
// Grasshopper - Check for factor
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.
function checkForFactor (base, factor) {
    // code here
    if(base % factor == 0){
      return true
    }else{
      return false
    }
  }

// 8 kyu
// Grasshopper - Debug sayHello
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock
function sayHello(name) {
    return `Hello, ${name}`
  }

// 8 kyu
// Grasshopper - If/else syntax debug
// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
// The function receives one parameter health which will always be a whole number between -10 and 10.
function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }

// 8 kyu
// How many lightsabers do you own?
// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18
function howManyLightsabersDoYouOwn(name) {
    if(name == 'Zach'){
      return 18
    }else{
      return 0
    }
  }

// 8 kyu
// Grasshopper - Function syntax debugging
// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
function main (verb, noun){
    return verb + noun
  }

// 8 kyu
// Grasshopper - Basic Function Fixer
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?
function addFive(num) {
    //var total = num + 5
    return num+5
  }

// 8 kyu
// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
function combat(health, damage) {
    // Write your code here
    if(damage > health){
      return 0
    }else{
      return health - damage
    }
  }

// 8 kyu
// Determine offspring sex based on genes XX and XY chromosomes
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
function chromosomeCheck(sperm) {
    if (sperm.charAt(1) == 'Y'){
      return "Congratulations! You're going to have a son."
    }else{
      return "Congratulations! You're going to have a daughter."
    }    
  }