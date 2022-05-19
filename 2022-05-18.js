// 8 kyu
// Well of Ideas - Easy Version
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x){
    let goodIdea = x.filter((x)=> x== 'good').length
    if(goodIdea > 2){
      return 'I smell a series!'
    }else if(goodIdea > 0){
      return 'Publish!'
    }else{
      return 'Fail!'
    }
}

// 8 kyu
// Capitalization and Mutability
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
function capitalizeWord(word) {
    return word[0].toUpperCase().concat(word.slice(1,word.length));
}