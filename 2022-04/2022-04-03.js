// 8 kyu
// Grasshopper - Messi goals function
// Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}

// 8 kyu
// Find the Remainder
// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
function remainder(n, m){
    if(n==0 && m==0){
      return NaN
    }else if (n > m){
      return n%m
    }else {
      return m%n
    }
  }

// 8 kyu
// Drink about
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"
function peopleWithAgeDrink(old) {
    if (old >=21){
      return 'drink whisky'
    }else if (old>=18){
      return 'drink beer'
    }else if (old >=14){
      return 'drink coke'
    }else{
      return 'drink toddy'  
    }
  };