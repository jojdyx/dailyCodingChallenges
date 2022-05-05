// 8 kyu
// Potenciation
// The function takes in 2 inputs x and y, and should return x to the power of y
// Simple, right? But you're NOT allowed to use Math.pow();
// Obs: x and y will be naturals, so DON'T take fractions into consideration;
// Note : zero to the power of zero equals one in this kata
// Great coding <3
function power(x,y){
    let num = 1;
    for (let i = 1 ; i <=y ; i++){
      num*=x
    }
    return num
}

// 8 kyu
// Find the Integral
// Create a function that finds the integral of the expression passed.
// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
// Notes:
// The output should be a string.
// The coefficient and exponent is always a positive integer.
// Examples
//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"
function integrate(coefficient, exponent) {
    return `${coefficient/(exponent+1)}x^${exponent+1}`
}