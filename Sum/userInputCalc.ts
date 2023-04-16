// import * as readline from 'readline-sync'; // --experimental-modules
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