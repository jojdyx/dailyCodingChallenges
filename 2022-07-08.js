// 7 kyu
// Largest Square Inside A Circle
// Determine the area of the largest square that can fit inside a circle with radius r.
function areaLargestSquare(r) {
    return Math.round(Math.pow(r * Math.sqrt(2) ,  2))
}