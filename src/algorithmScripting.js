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

function factorialize(num) {
  let total = 0;
  for (let i = num; i > 0; i--) {
    total = num[i] * num +1;
  }
  return total;
}

console.log(factorialize(5));
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
//6.Confirm the Ending
//7.Repeat a String Repeat a String
//8.Truncate a String
//9.Finders Keepers
//10.Boo who
//11.Title Case a Sentence
//12.Slice and Splice
//13.Falsy Bouncer
//14.Where do I Belong
//15.Mutations
//16.Chunky Monkey