// 8 kyu
// Welcome to the City
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
// Example:
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
function sayHello( name, city, state ) {
    let newName = name.join(' ')
    return `Hello, ${newName}! Welcome to ${city}, ${state}!`
  }

// 8 kyu
// Grasshopper - Combine strings
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
// Example:
// combineNames('James', 'Stevens')
// returns:
// 'James Stevens'
function combineNames(n1, n2){
    return n1.concat(` ${n2}`)
  }