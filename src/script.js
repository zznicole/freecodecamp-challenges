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

//1. Using the Test Method

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);

//2.  Match Literal String

// let waldoIsHiding = "Somewhere Waldo is hiding in the test.";
// let waldoRegex = /Waldo/;
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

//3. Match a literal String with Different Possibilities

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString);
// console.log(result);

//4. Ignore Case While Matching

// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i;
// let result = fccRegex.test(myString);
// console.log(result);

//5. Extract Matches

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);

//6. Find More Than the First Match

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi;
// let result = twinkleStar.match(starRegex);
// console.log(result);

//7. Regular Expressions: Match Anything with Wildcard Period

// let exampleStr = "let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// console.log(result);

//8. Regular Expressions: Match Single Character with Multiple Possibilities

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);
// console.log(result);

//9.Regular Expressions: Match Letters of the Alphabet

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex);
// console.log(result);

//10.Regular Expressions: Match Numbers and Letters of the Alphabet

// let quoteSample ="Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

//11. Regular Expressions: Match Single Characters Not Specified

// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

//12. Regular Expressions: Match Characters that Occur One or More Times

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);
// console.log(result);

//13. Regular Expressions: Match Characters that Occur Zero or More Times

// let chewieQuote = "Aaaaaaaaaaaaaarrgh";
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

//14. Regular Expressions: Find Characters with Lazy Matching

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);
// console.log(result);

//15. Regular Expressions: Find One or More Criminals in a Hunt

// Let reCriminals = /C+/g;

//16. Regular Expressions: Match Beginning String Patterns

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
// console.log(result);

//17. Regular Expressions: Match Ending String Patterns

// let caboose = " The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result);

//18. Regular Expressions: Match all Letters and Numbers
// let quoteSample = "The five boxig wizards jump quickly."
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;

//19. Regular Expressions: Match Everything But Letters and Numbers

// let quoteSample = "THe five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;

//20. Regular Expressions: Match All Numbers

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = matchName. match(numRegex).length;

//21. Regular Expressions: Match All Non-Numbers

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;

//22. Regular Expressions: Restrict Possible Usernames

// let username = "Z97";
// let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
// let result = userCheck.test(username);
// console.log(result);

//23. Regular Expressions: Match WHitespace

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g;
// let result = sample.match(countWhiteSpace);
// console.log(result);

//24. Regular Expressions: Match Non-WHitespace Characters

// let sample = "Men are from Mars and women are from Venus.";
// let countNonWhiteSpace = /\S/g;
// let result = sample.match(countNonWhiteSpace);
// console.log(result);

//25. Regular Expressions: Specify Upper and Lower Number of Matches

// let ohStr = "ohhhhhhh no";
// let ohRegex = /oh{3,6}\sno/i;
// let result = ohRegex.test(ohStr);
// console.log(result);

//26. Regular Expressions: Specify Only the Lower Number of Matches

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/;
// let result = haRegex.test(haStr);
// console.log(result);

//27. Regular Expressions: Specify Exact Number of Matches

// let timeStr = "Timmmmber";
// let timeRegex = /Tim{4}ber/;
// let result = timeRegex.test(timeStr);
// console.log(result);

//28. Regular Expressions: Check for All or None

// let favWord = "favorite";
// let favRegex = /favou?rite/;
// let result = favRegex.test(favWord);
// console.log(result);

//29. Regular Expressions: Positive and Negative Lookahead

// let sampleWord = "bana12";
// let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);
// console.log(result);

//30. Regular Expressions: Check For Mixed Grouping of Characters

// let myString = "Franklin D. Roosevelt";
// let myRegex = /(Eleanor|Franklin\sD.)\sRoosevelt/i;
// let result = myRegex.test(myString);
// console.log(result);

//31. Regular Expressions: Reuse Patterns Using Capture Groups

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)(\s)\1\2\1$/;
// let result = reRegex.test(repeatNum);
// console.log(result);

//32. Regular Expressions: Use Capture Groups to Search and Replace

// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
// let replaceText = '$3 $2 $1';
// let result = str.replace(fixRegex,replaceText);
// console.log(result);

//33. Regular Expressions: Remove Whitespace from Start and End
// let hello = "  Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g;
// let result = hello.replace(wsRegex, "");
// console.log(result);
