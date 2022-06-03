// 8 kyu
// Define a card suit
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
function defineSuit(card) {
    if (card.charAt(card.length-1) == '♣'){
      return 'clubs'
    }else if (card.charAt(card.length-1) == '♦'){
      return 'diamonds'
    }else if (card.charAt(card.length-1) == '♥'){
      return 'hearts'
    }else if (card.charAt(card.length-1) == '♠'){
      return 'spades'
    }
}

// 8 kyu
// Hex to Decimal
// Complete the function which converts hex number (given as a string) to a decimal number.
function hexToDec(hexString){
    return parseInt(hexString, 16)
}

// 8 kyu
// BASIC: Making Six Toast.
// Story:
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.
// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):
// six_toast(12) == 6
function sixToast(num) {
    return Math.abs(6-num)
}

// 8 kyu
// NBA full 48 minutes average
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
// Examples:
// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!
function pointsPer48(ppg, mpg) {
    return Number((ppg/mpg*48).toFixed(1)) || 0
}

// 8 kyu
// Man in the west
// A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.
// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
function checkTheBucket(bucket){
    return bucket.filter(x => x == 'gold').length >=1 ? true : false
}