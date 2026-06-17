//var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNum = numbers.map(function (x) {
//     return x * 2;
// });
// var newNum = [];

// numbers.forEach(function (x) {
//     newNum.push(x * 2);
// });

//Filter - Create a new array by keeping the items that return true.

// const newNum = numbers.filter(function (num) {
//     return num < 10;
// });

// var newNum = [];
// numbers.forEach(function (num) {
//     if (num < 10) {
//         newNum.push(num);
//     }
// });

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNum = numbers.reduce(function (accumulator, currentNum) {
//     return accumulator + currentNum;
// });

// var newNum = 0;
// numbers.forEach(function (currentNum) {
//     newNum += currentNum;
// });


//Find - find the first item that matches from an array.

// var newNum = numbers.find(function (num) {
//     return num > 10;
// });

//FindIndex - find the index of the first item that matches.

// var newNum = numbers.findIndex(function (num) {
//     return num > 10;
// });
// console.log(newNum);

import emojipedia from "./emojipedia";

const newEmojis = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojis);
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
