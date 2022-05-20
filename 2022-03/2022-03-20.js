// 8 kyu
// USD => CNY
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// Examples (Input -> Output)
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
function usdcny(usd) {
    let cny = usd * 6.75;
    cny = cny.toFixed(2);
    return (`${cny} Chinese Yuan`)
}

// 8 kyu
// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2)
{
  if (operation === '+' ){
    return value1 + value2;
  }else if (operation === '-'){
    return value1 - value2;
  }else if (operation === '*'){
    return value1 * value2;
  }else{
    return value1 / value2;
  }
}