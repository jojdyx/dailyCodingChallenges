// 7 kyu
// shorter concat [reverse longer]
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b
function shorter_reverse_longer(a,b){
    return a.length >= b.length ? `${b}${a.split('').reverse().join('')}${b}` : `${a}${b.split('').reverse().join('')}${a}`
}

// 7 kyu
// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
function getSum( a,b ){
    let sum = 0
    for(let i = Math.min(a,b) ; i <= Math.max(a,b); i++){
      sum+=i
    }
    return sum
}