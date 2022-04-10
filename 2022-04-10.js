// 8 kyu
// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name){
  // code away
let newName = name.split(' ')
let firstName = newName[0].toUpperCase()
let lastName = newName[1].toUpperCase()
return `${firstName[0]}.${lastName[0]}`
}

// 8 kyu
// A Needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")
function findNeedle(haystack) {
  // your code here
  let theIndex = haystack.findIndex((e) => e === 'needle')
  return `found the needle at position ${theIndex}`
}

// 8 kyu
// Is he gonna survive?
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)
function hero(bullets, dragons){
  //Get Coding!
    return bullets >= dragons*2 ? true : false
}