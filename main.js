// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let number = 14;
let text = number.toString(); 
console.log(text);


// Write a JavaScript program to convert a string to the number.
let myString = '250' 
console.log(parseInt(myString))


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
console.log(typeof);

  // * Boolean
  console.log(typeof true);

  // * Null

  // * Undefined
console.log(typeof undeclaredVariable);
  // * Number
console.log(typeof 42);
  // * NaN

  // * String
  console.log(typeof 'cow moo');
  

  
// Write a JavaScript program that adds 2 numbers together.
let x = 9;
let y = 2;
let z = x + y;
console.log(z);


// Write a JavaScript program that runs only when 2 things are true.
const andTrueTest = (x, y) => {
  if (x < 88 && y < 5) {console.log("true")}
  else {console.log("false")}
}

andTrueTest(89, 4)

// Write a JavaScript program that runs when 1 of 2 things are true.

function trueTest(x, y) {
  if (x > 10 || y < 20) {
    console.log('yes');}
 else {console.log('no')}};

trueTest(2, 19)

// Write a JavaScript program that runs when both things are not true.  

const untrueTest = (x, y) => {
  if (x != 5 && y != 7) {
    console.log("is true")
  } else {console.log("not true")}
}

untrueTest(6, 9)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
