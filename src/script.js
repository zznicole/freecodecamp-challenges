//ES6: Use getters and setters to Control Access to an Object
// class Thermostat {
//   constructor(emp) {
//     this._Temp = 5/9 * (fahrenheitTemp -32)
//   }
//   get temperature() {
//     return this._Temp;
//   }

//   set temperature(updatedTemp){
//     this.temp = updatedTemp;
    
//   }
//  }

//  const thermos = new Thermostat(76);
//  let temp = thermos.temperature;
//  thermos.temperature = 26;
//  temp = thermos.temperature;



// Introduction to the Regular Expression Challenges
// Using the Test Method
// Match Literal String
// Match a literal String with Different Possibilities
// Ignore Case While Matching
// Extract Matches
// Find More Than the First Match
// Regular Expressions: Match Anything with Wildcard Period

// let exampleStr = "let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// console.log(result);

// Regular Expressions: Match Single Character with Multiple Possibilities

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);
// console.log(result);

//Regular Expressions: Match Letters of the Alphabet

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex);
// console.log(result);

//Regular Expressions: Match Numbers and Letters of the Alphabet

// let quoteSample ="Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

// Regular Expressions: Match Single Characters Not Specified

// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

// Regular Expressions: Match Characters that Occur One or More Times

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);
// console.log(result);

// Regular Expressions: Match Characters that Occur Zero or More Times

// let chewieQuote = "Aaaaaaaaaaaaaarrgh";
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// Regular Expressions: Find Characters with Lazy Matching

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);
// console.log(result);

// Regular Expressions: Find One or More Criminals in a Hunt

// Let reCriminals = /C+/g;

// Regular Expressions: Match Beginning String Patterns

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
// console.log(result);

// Regular Expressions: Match Ending String Patterns

// let caboose = " The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result);

//Regular Expressions: Match all Letters and Numbers
// let quoteSample = "The five boxig wizards jump quickly."
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;

//Regular Expressions: Match Everything But Letters and Numbers

// let quoteSample = "THe five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;

//Regular Expressions: Match All Numbers

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = matchName. match(numRegex).length;

//Regular Expressions: Match All Non-Numbers

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;

//Regular Expressions: Restrict Possible Usernames
