//1.Convert Celsius to Fahrenheit

// function convertToF(clesius) {
//   let fahrenheit = (clesius * 9/5) + 32;
//   return fahrenheit;
// }

// console.log(convertToF(20));

//2.Reverse a String

// function reverseString(str) {
//   let array = str.split('');
//   let reverseArray = array.reverse();
//   let newString= reverseArray.join('');
//   return newString;
// }
// console.log(reverseString('hello'));

//3.Factorialized a Number

// function factorialize(num) {
//     for (let product = 1; num > 0; num--) {
//       product *= num;
//     }
//     return product;
//   }
  
//   factorialize(5);
// console.log(factorialize(5));
//4.Find the Longest Word in a String

// function findlongestWordLength(str) {
//   let words = str.split(" "); 
//   let longestWord = 0;
//   for (let i = 0; i < words.length; i++){
//     if(words[i].length > longestWord) {
//       longestWord = words[i].length;
//     }
//   }
//   return(longestWord);
// }

// console.log(findlongestWordLength("The quick brown fox jumped over the lazy dog"));

//5.Return Largest Numbers in Arrays

// function largestOfFour(arr) {
  
//   let largestNumArr = []
  
//   for(let i = 0; i < arr.length; i++) {
//     let largestNum = arr[i][0];
//     console.log(largestNum);
//     for(let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNum) {
//         largestNum = arr[i][j];
//       }
//     }
//   largestNumArr[i] = largestNum;
//   }
//   return largestNumArr;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//6.Confirm the Ending

// function confirmEnding(str, target) {

//    return str.substring(str.length - target.length) === target;
// }

// console.log(confirmEnding("Bastian", "an"));


//7.Repeat a String Repeat a String

// function repeatStingNumTimes(str, num) {
//  let repeatedStr = "";
//  while (num > 0) {
//   repeatedStr += str;
//   num--;
// }
//     return repeatedStr;
// }

//repeatStingNumTimes("abc", -3);

//8.Truncate a String

// function truncateString(str, num) {

// if (str.length <= num) {
//   return str;
// } 
//   return str.slice(0, num) + "...";
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

//9.Finders Keepers

// function findElement(arr, func) {
//   let num = 0;
//   for(let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// findElement([1, 5, 3, 4], num => num % 2 === 0 );


//10.Boo who

function booWho(bool) {
return typeof bool === "boolean";
}

console.log(booWho(9));
//11.Title Case a Sentence
//12.Slice and Splice
//13.Falsy Bouncer
//14.Where do I Belong
//15.Mutations
//16.Chunky Monkey