// 8 kyu
// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
function maps(x){
  return x.map(i => i*2) 
}

// 8 kyu
// Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
  let newStr = '';
  for (let i =str.length-1 ; i >=0; i--){
    newStr +=str[i]
  }
    return newStr;
}