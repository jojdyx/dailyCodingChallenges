// 8 kyu
// Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
function century(year) {
    return Math.ceil(year/100)
}

// 8 kyu
// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!
function doubleChar(str) {
    return str.split('').map(x => x.repeat(2)).join('')
}

// 8 kyu
// My head is at the wrong end!
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!
function fixTheMeerkat(arr) {
    return arr.reverse()
}

// 8 kyu
// Stringy Strings
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.
function stringy(size) {
    return size%2==0 ? '10'.repeat(size/2) : '10'.repeat(size/2)+'1'
}

// 8 kyu
// FIXME: Replace all dots
// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.
// Task
// Fix the bug so we can all go home early.
// Notes
// String str will never be null.
var replaceDots = function(str) {
    return str.replace(/[.]/g, '-');
}