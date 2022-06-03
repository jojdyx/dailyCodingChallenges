// 8 kyu
// Will you make it?
// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if( distanceToPump <=  mpg * fuelLeft){
      return true
    }else {
      return false
    }
};

// 8 kyu
// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(arrayOfSheep) {
  let arr =[]
  for(let i = 0; i<arrayOfSheep.length; i++){
    if(arrayOfSheep[i] == true){
      arr.push(arrayOfSheep[i])
    }
  }
  return arr.length
}