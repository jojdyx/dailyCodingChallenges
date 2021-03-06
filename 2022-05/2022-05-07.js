// 8 kyu
// Who ate the cookie?
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.
// Please leave feedback for this kata. Cheers!
function cookie(x){
    if(typeof(x) == 'string'){
      return 'Who ate the last cookie? It was Zach!'
    }else if(typeof(x) == 'number'){
      return 'Who ate the last cookie? It was Monica!'
    }else{
      return 'Who ate the last cookie? It was the dog!'
    }
}

// 8 kyu
// Multiply the number
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹
function multiply(number){
    let digit = Math.abs(number).toString().length
    return number * Math.pow(5, digit)
}

// 8 kyu
// Fix the Bugs (Syntax) - My First Kata
// Fix the Bugs (Syntax) - My First Kata
// Overview
// Hello, this is my first Kata so forgive me if it is of poor quality.
// In this Kata you should fix/create a program that returns the following values:
// false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers
// You may assume the following:
// If a and b are both numbers, neither of a or b will be 0.
function myFirstKata(a, b) {
    if (typeof(a) == "number" && typeof(b) == "number") {
      return a%b + b%a;
    } else {
      return false;
    }
}