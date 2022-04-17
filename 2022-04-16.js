//8 kyu
//Ensure question
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
// For example (Input --> Output)
// "Yes" --> "Yes?" 
// "No?" --> "No?"
function ensureQuestion(s) {
    // Code here
    if(s.charAt(s.length-1) == '?'){
      return s
    }else{
      return s+'?'
    }
  }

//8 kyu
//Grasshopper - Messi Goals
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
// Information
// Messi goal scoring statistics:
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// 8 kyu
// Grasshopper - Terminal game move function
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15
function move (position, roll) {
    // return the new position
    return position + roll * 2;
  }

// 8 kyu
// Price of Mangoes
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
function mango(quantity, price){
    if(quantity%3 == 0){
      return quantity/3*2*price
    }else{
      return (quantity%3*price) + (quantity-quantity%3)/3*2*price
    }
  }