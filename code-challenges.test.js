// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { objectExpression } = require("@babel/types")
const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//Psuedocode: 
// Input: ["purple", "blue", "green", "yellow", "pink"]
//        ["chartreuse","indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Output: ["yellow", "blue", "pink", "green"]
//         ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function 
// console log the test and variables
// test should pass

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("colorShuffle", () => {
  it ("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(colorShuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"]) 
    expect(colorShuffle(colors2)).toEqual(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
  })
})

// FAIL  ./code-challenges.test.js
//   colorShuffle
//     ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

//   ● colorShuffle › takes in an array, removes the first item from the array and shuffles the remaining content

//     ReferenceError: colorShuffle is not defined

// b) Create the function that makes the test pass.  
const colorShuffle = (colors) => {
  let shuffledColors = [...colors]
  for(let i=0; i<colors.length; i++){
    colors.shift(i)
    const shuffle = Math.floor(Math.random () * (i+1))
    var temp = colors[i]
    colors[i] = shuffledColors
    shuffledColors = temp
    shuffledColors(shuffle)
  }
} 

console.log(colorShuffle(colors1))
console.log(colorShuffle(colors2))
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

//Psuedocode: 
// Input: { upVotes: 13, downVotes: 2 }
//        { upVotes: 2, downVotes: 33 }
// Output: 11 & -31
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function 
// console log the test and variables
// test should pass

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe("totalVotes", () => {
  it ("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(totalVotes(votes1)).toEqual([11]) 
    expect(totalVotes(votes2)).toEqual([-31])
  })
})

// FAIL  ./code-challenges.test.js
//   totalVotes
//   ✕ takes in an object that contains up votes and down votes and returns the end tally

// ● totalVotes › takes in an object that contains up votes and down votes and returns the end tally

//   ReferenceError: totalVotes is not defined

// b) Create the function that makes the test pass.

const totalVotes = (upVotes, downVotes) => {
  const combinedVotes = this.upVotes + this.downVotes
}
console.log(totalVotes(votes1))
console.log(totalVotes(votes2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//Psuedocode: 
// Input: ["array", "object", "number", "string", "Boolean"]
//        ["string", "null", "Boolean", "string", "undefined"]
// Output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function 
// console log the test and variables
// test should pass

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noRepeat", () => {
  it ("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(noRepeat(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]) 
  })
})
// FAIL  ./code-challenges.test.js
//   noRepeat
//     ✕ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

//   ● noRepeat › takes in two arrays as arguments and returns one array with no duplicate values

//     ReferenceError: noRepeat is not defined

// b) Create the function that makes the test pass.

const noRepeat = (dataArray1, dataArray2) => {
 const mixedDataArray = dataArray1.concat(dataArray2)
 mixedDataArray.forEach(Element => {
  if (!mixedDataArray.includes(Element)) {
    mixedDataArray.push(Element)
  } 
 });


} 
console.log(noRepeat(dataArray1, dataArray2))