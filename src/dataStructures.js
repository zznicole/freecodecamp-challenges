//1. Basic Date Structures: Use an Array to Store a Collection of Data

// let yourArray = ['coding', 6, 'is' ,'fun', true, undefined, null];

//2. Basic Date Structures: Access an Array's Contents Using Bracket Notation

// let myArray = ["a", "b", "c", "d"];

// myArray[1] = "f";
// console.log(myArray);

//3. Basic Date Structures: Add Items to an Array with push() and unshift()

// function mixedNumbers(arr) {
//   arr.unshift('I', 2, 'three');
//   arr.push(7, 'VIII', 9);
//   return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));

//4. Basic Date Structures: Remove Items from an Array with pop() and shift()

// function popShift(arr) {
//   let popped =  arr.pop();
//   let shifted = arr.shift();
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

//5. Basic Date Structures: Remove Items Using splice()

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);
