// 8 kyu
// Array plus array
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
    let new1 = arr1.reduce((a,c) => a+c,0)
    let new2 = arr2.reduce((a,c) => a+c,0)
    let total = new1 + new2
    return total
}

// 8 kyu
// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);      
    }
}

// 8 kyu
// Find Maximum and Minimum Values of a List
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.
var min = function(list){   
    return Math.min(...list);
}
var max = function(list){  
    return Math.max(...list);
}

// 8 kyu
// Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
}

// 8 kyu
// Grasshopper - Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greet (name, owner) {
    if (name == owner){
      return 'Hello boss'
    }else{
      return 'Hello guest'
    }
}

// 8 kyu
// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    if ((flower1 % 2 == 1 && flower2 %2 ==0) ||(flower1 % 2 == 0 && flower2 %2 ==1) ){
      return true
    }else {
      return false
    }
}