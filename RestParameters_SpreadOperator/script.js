// Functie 1 meedere cijfers bij elkaar optellen, de functie accepteert meerdere argumenten
// REST PARAMETER

const sum = function (...numbers) {

    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(sum(1, 2, 3, 4, 5))
// verwachte uitkomst 15
console.log(sum(1, 2, 3, 4, 5, 6))
// verwachte uitkomst 21

// solution Winc
// const optellen = function(...args) {
//     return args.reduce((acc,item) => {
//             return acc + item;
//     })
// }

// console.log(optellen(1,2,3,4,5,6)); // verwachte uitkomst: 21

// Functie 2 meedere cijfers bij elkaar optellen, de functie accepteert 1 argument
// SPREAD OPERATOR

const sum2 = function (a, b, c) {
    return a + b + c;
}

const cijfers = [1, 2, 3];

console.log(sum2(...cijfers));
// verwachte uitkomst 6

// solution Winc
// const optellen = function(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }

//   const cijfers = [1, 2, 3];

//   console.log(optellen(...cijfers));
// verwachte uitkomst: 6

