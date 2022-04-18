// 8 kyu
// String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr (n, s) {
    let str = '' // an empty str
    for (let i =1 ; i <=n ; i++){
        str += s
    }
      return str
  }

// 8 kyu
// If you can't sleep, just count sheep!!
// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
    //your code here
      let str = ''
      for (let i =1; i<=num; i++){
        str += (i+' sheep...')
    }
      return str
  }