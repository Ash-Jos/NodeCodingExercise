// import * as readline from 'readline-sync'; // --experimental-modules
import * as React from 'react';
const readline = require('readline-sync');
// import readline from 'readline-sync';


function inputCalc(): number {
    let firstNum: number;
    let secondNum: number; 
    let ans: number = 0;
    let operator: string;

    do {
        const input1: string = readline.question('Enter first number: '); // prompts user for input
        firstNum = parseFloat(input1); // changes string to number
    } while (isNaN(firstNum)); // not a number check

    do {
        const op: string = readline.question('Enter operation (+, -, *, /): ');
        operator = op;
    } while (operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*");

    do {
        const input2: string = readline.question('Enter second number: ');
        secondNum = parseFloat(input2);
    } while (isNaN(secondNum));

    if (operator === "+") {
        ans = firstNum + secondNum;
        console.log(`The sum of ${firstNum} and ${secondNum} is = ${ans}`);
    }
   else if (operator === "-") {
        ans = firstNum - secondNum;
        console.log(`The difference of ${firstNum} and ${secondNum} is = ${ans}`);
    }
    else if (operator === "*") {
        ans = firstNum * secondNum;
        console.log(`The product of ${firstNum} and ${secondNum} is = ${ans}`);
    }
    else if (operator === "/") {
        ans = firstNum / secondNum;
        console.log(`The quotient of ${firstNum} and ${secondNum} is = ${ans}`);
    }
    else {
        console.log("There has been an error, please try again");
    }
    console.log(`Answer: ${ans}`);
    return ans;

};
inputCalc();

// for (let i = 1; i <= 7; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "#";
//   }
//   console.log(row);
// }

// Fizz - Buzz
// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 === 0) {
//     output += "Fizz";
//   }
//   if (i % 5 === 0) {
//     output += "Buzz";
//   }
//   console.log(output || i);
// }

// >>>>>>>>>>>>>>>>>>>>Flattening Arrays --incomplete<<<<<<<<<<<<<<<<<<<<
// function concatArrays(arrays: any[]) {
//     return arrays.reduce((accumulator, value) => accumulator.concat(value), []);
//   }
//   const a = [["a", "b", "c"], ["a", "b", "c"], ["a", "b", "c"]];
//   const result = concatArrays(a);
//   console.log(result);

function concatArrays(arrays: any[]) {
    return arrays.reduce((accumulator, value) => {
      return accumulator.concat(value);
    });
  }
  
  const a = [["a", "b", "c"], ["1", "2", "3"], ["apple", "ape", "airplane"]];
  const result = concatArrays(a);
  console.log(result);
  
  
