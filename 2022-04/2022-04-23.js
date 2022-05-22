// 8 kyu
// Lario and Muigi Pipe Problem
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
// Task
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
// Example
// Input: 1,3,5,6,7,8
// Output: 1,2,3,4,5,6,7,8
function pipeFix(numbers){
    let firstNum = numbers[0]
    let lastNum = numbers[numbers.length-1]
    let arr = []
    for (let i = firstNum; i<= lastNum; i++){
      arr.push(i)
    }
    return arr
  }

// 8 kyu
// Vowel remover
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata
function shortcut (string) {
  return string.replace(/[aeiou]/g, '')
}

// 8 kyu
// Enumerable Magic #25 - Take the First N Elements
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
function take(arr, n) {
  return arr.slice(0,n)
}

// 8 kyu
// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
function warnTheSheep(queue) {
  let wolfIndex = queue.indexOf("wolf")
  let sheepPosition = queue.length-1-wolfIndex
  if (wolfIndex == queue.length-1){
    return "Pls go away and stop eating my sheep"
  }else{
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`
  }
}

// 8 kyu
// Reversing Words in a String
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!
function reverse(string){
  return string.split(' ').reverse().join(' ')
}