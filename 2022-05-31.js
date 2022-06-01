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