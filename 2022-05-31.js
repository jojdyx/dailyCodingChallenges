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