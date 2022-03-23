// 8 kyu
// Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!
function paperwork(n, m) {
    let total = m*n;
    if (n<0 || m<0){
      return 0;
    }
      return total;
}

// 8 kyu
// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s){
    s *= 1000;
    m *= 60000;
    h *= 3600000;
    return (h+m+s);
}