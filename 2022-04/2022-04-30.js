// 8 kyu
// Tip Calculator
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// You need to consider the following ratings:
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.
function calculateTip(amount, rating) {
    let lowerCaseRate = rating.toLowerCase()
    if(lowerCaseRate == 'excellent' ){
      return Math.ceil(amount*0.2)
    }else if (lowerCaseRate == 'great'){
      return Math.ceil(amount*0.15)
    }else if (lowerCaseRate == 'good'){
      return Math.ceil(amount*0.1)
    }else if (lowerCaseRate == 'poor'){
      return Math.ceil(amount*0.05)
    }else if (lowerCaseRate == 'terrible'){
      return 0
    }else{
      return 'Rating not recognised'
    }
}