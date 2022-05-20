// 8 kyu
// Merge two sorted arrays into one
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!
function mergeArrays(arr1, arr2) {
    //concat > remove duplicate  > sort
    let concatArrs = arr1.concat(arr2)
    //let noDupArrs = concatArrs.filter(x => x<2 )//wrong
    let noDupArrs = []
    concatArrs.forEach((item)=>{
      if(!noDupArrs.includes(item)){
        noDupArrs.push(item);
      }
    })        
    let sortArrs = noDupArrs.sort(function(a,b) {return a-b})
    return sortArrs
    //return (arr1.concat(arr2)).sort(function(a,b) {return a-b} )
}

// 8 kyu
// Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    //cal sum using reduce
    let sum = marks.reduce((acc, count)=> acc+ count , 0)
    //find total num using length
    let numOfMarks = marks.length
    //round down to integer using Math.floor
    return Math.floor(sum/numOfMarks)   
}

// 8 kyu
// Convert number to reversed array of digits
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
function digitize(n) {
    let newN = n.toString().split('').reverse().map(n => Number(n))
    return newN;
}