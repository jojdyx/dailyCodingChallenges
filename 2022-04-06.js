// 8 kyu
// Closest elevator
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0-2.
// Examples:
// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"
function elevator(left, right, call){
    if(Math.abs(left - call) < Math.abs(right - call)){
      return 'left'
    }else{
      return 'right'
    }
  }

// 8 kyu
// Get Planet Name By ID
// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break
      case 3:
        name = 'Earth';
        break
      case 4:
        name = 'Mars';
        break
      case 5:
        name = 'Jupiter';
        break
      case 6:
        name = 'Saturn';
        break
      case 7:
        name = 'Uranus';
        break
      case 8:
        name = 'Neptune';
        break
    }   
    return name;
  }

// 8 kyu
// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b; break;
      case'-': result = value.a - value.b; break;
      case'/': result = value.a / value.b; break;
      case'*': result = value.a * value.b; break;
      case'%': result = value.a % value.b; break;
      case'^': result = Math.pow(value.a, value.b);
    }
    return result;
  }