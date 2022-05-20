// 8 kyu
// Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = function(l , w) {
    // Return your answer
    if( l === w ){
      return l*w
    }else {
      return l*2+w*2
    }
};

// 8 kyu
// Switch it Up!
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.
function switchItUp(number){
      switch(number){
          case 1:
          return 'One';
          case 2:
          return 'Two';
          case 3:
          return 'Three';
          case 4:
          return 'Four';
          case 5:
          return 'Five';
          case 6:
          return 'Six';
          case 7:
          return 'Seven';
          case 8:
          return 'Eight';
          case 9:
          return 'Nine';
          case 0:
          return 'Zero';          
      }
}

// 8 kyu
// Transportation on vacation
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
    if (d<=2){
      return d*40
    }else if(d>=3 && d<7){
      return d*40-20
    }else{
      return d*40-50
    }
}

// 8 kyu
// Convert a string to an array
// Write a function to split a string and convert it into an array of words.
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string){
    return string.split(' ')
}