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