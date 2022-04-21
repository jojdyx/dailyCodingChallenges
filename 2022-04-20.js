// 8 kyu
// Super Duper Easy
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    //your code here
    if(typeof x === 'number'){
        return x*50+6
    }else{
        return 'Error'
    }
  }

// 8 kyu
// Pre-FizzBuzz Workout #1
// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.
function preFizz(n) {
    let arr=[]
    for(let i = 1; i <=n ; i++){
      arr.push(i)
    }
      return arr
  }