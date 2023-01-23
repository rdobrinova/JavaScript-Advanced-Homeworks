// Exercise 1
// Make 3 functions:

// Function that takes a number through a parameter and returns how many digits that number has
// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed.It should show the results in the console.
//     Ex:
// Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative

function howManyDIgitsNumberHas(number) {
    return Math.abs(number).toString().length;
}
// console.log(howManyDIgitsNumberHas(2345));
// console.log(howManyDIgitsNumberHas(-2345));

function evenOrOddNumber(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
// console.log(evenOrOddNumber(20));
// console.log(evenOrOddNumber(21));

function positiveOrNegativeNumber(number) {
    if (number > 0) {
        return "positive";
    } else {
        return "negative";
    }
}
// console.log(positiveOrNegativeNumber(34));
// console.log(positiveOrNegativeNumber(-34));

function getNumberStats(number) {
    return `NumberStats: ${howManyDIgitsNumberHas(number)} digits, ${evenOrOddNumber(number)}, ${positiveOrNegativeNumber(number)}`;
}
console.log(getNumberStats(-25));
console.log(getNumberStats(264));



