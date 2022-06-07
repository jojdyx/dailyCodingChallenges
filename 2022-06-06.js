// 8 kyu
// Name on billboard
// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
function billboard(name, price = 30){
    let total = 0
    for (let i =0 ; i<name.length; i++){
      total+=price
    }
    return total
} 

// 8 kyu
// String cleaning
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
function stringClean(s){
    return s.replace(/[1234567890]/g, '')
}

// 8 kyu
// pick a set of first elements
// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
// If n == 0 return an empty sequence []
// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];
function first(arr, n) {
    return n == undefined ? arr.slice(0,1) : arr.slice(0,n)
}