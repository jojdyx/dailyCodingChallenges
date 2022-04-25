// 8 kyu
// Cat years, Dog years
// Kata Task
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 1;
    let dogYears = 1;
    if(humanYears < 2){
      return [humanYears, catYears * 15 , dogYears *15 ]
    }else if (humanYears <3 ){
      return [humanYears, catYears * 15 + 9 , dogYears *15 +9]
    }else{
      return [humanYears, catYears * 15 + 9 + (4*(humanYears-2)), dogYears *15 +9 +(5*(humanYears-2))]
    }
  }

// 8 kyu
// Help the Elite Squad of Brazilian forces BOPE
// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
// Example:
// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1
// The return Will always be an integer so as the params.
function magNumber(info){
  let gun = info[0]
  let bulletsNeed = info[1] * 3
  if(gun == 'PT92'){
    return Math.ceil(bulletsNeed/17)
  }else if(gun == 'M4A1' || gun == 'M16A2' ){
    return Math.ceil(bulletsNeed/30)
  }else if(gun == 'PSG1'){
    return Math.ceil(bulletsNeed/5)
  }
}