//8 kyu
//Surface Area and Volume of a Box
//Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth) {
    let surface = ((width * height) * 2) + ((width * depth) * 2) + ((height * depth) * 2);
    let volume = width * height * depth;
    return [surface, volume];
  }

//8 kyu
//Sleigh Authentication
// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.
// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
//Examples:
//var sleigh = new Sleigh();
//sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  // TODO
  if(name == "Santa Claus" && password=="Ho Ho Ho!"){
    return true
  }
  else
    {
      return false
    }
};

//8 kyu
//Grasshopper - Variable Assignment Debug
// Variable assignment
// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
var a = "dev"
var b = "Lab"

var name = a + b