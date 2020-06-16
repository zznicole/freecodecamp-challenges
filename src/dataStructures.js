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

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(1, 4);
// console.log(arr);

//6. Basic Date Structures: Add Items Using splice()

// function htmlColorNames(arr) {
//   arr.splice(0, 2,'DarkSalmon', 'BlanchedAlmond');
//   return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//7. Basic Date Structures: Copy Array Items Using slice()

// function forecast(arr) {
//   let newArr = arr.slice(2, 4);
//   return newArr;
// }

// console.log(forecast(['cold','rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//8. Basic Date Structures: Copy an Array with the Spread Operator

// function copyMachine(arr, num) {
//    let newArr = [];
//    while (num >= 1) {
//      newArr.push([...arr]);
//      num--;
//    }
//    return newArr;
// }

// console.log(copyMachine([true, false, true], 3));

//9. Basic Date Structures: Combine Arrays with the Spread Operator

// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun'];
//   return sentence;
// }

// console.log(spreadOut());

//10. Basic Date Structures: Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0){
    return true;
  } else {
    return false;
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));