// 8 kyu
// Find the position!
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"
// This kata is meant for beginners. Rank and upvote to bring it out of beta
function position(letter){
    let alphabet = {
      'a': 1, 'b':2 , 'c':3, 'd':4 , 'e':5, 'f':6,
      'g': 7, 'h':8 , 'i':9, 'j':10 , 'k':11, 'l':12,
      'm': 13, 'n':14 , 'o':15, 'p':16 , 'q':17, 'r':18,
      's': 19, 't':20 , 'u':21, 'v':22 , 'w':23, 'x':24,
      'y': 25, 'z':26 
    }
    return `Position of alphabet: ${alphabet[letter.toLowerCase()]}`
}

// 8 kyu
// Alan Partridge II - Apple Turnover
// As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:
// Lynn: Alan, there’s that teacher chap.
// Alan: Michael, if he hits me, will you hit him first?
// Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
// Alan: Yeah, chicken stock.
// Phil: Hello Alan.
// Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
// Lynn: What do you mean?
// Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.
// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
// X will be a valid integer number.
// X will be either a number or a string. Both are valid.
function apple(x){
    let degree = Math.pow(Number(x),2)
    if(degree > 1000){
      return 'It\'s hotter than the sun!!'
    }else{
      return 'Help yourself to a honeycomb Yorkie for the glovebox.'
    }
}