// import * as readline from 'readline-sync'; // --experimental-modules
var readline = require('readline-sync');
// import readline from 'readline-sync';
function inputCalc() {
    var firstNum;
    var secondNum;
    var ans = 0;
    var operator;
    do {
        var input1 = readline.question('Enter first number: '); // prompts user for input
        firstNum = parseFloat(input1); // changes string to number
    } while (isNaN(firstNum)); // not a number check
    do {
        var op = readline.question('Enter operation (+, -, *, /): ');
        operator = op;
    } while (operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*");
    do {
        var input2 = readline.question('Enter second number: ');
        secondNum = parseFloat(input2);
    } while (isNaN(secondNum));
    if (operator === "+") {
        ans = firstNum + secondNum;
        console.log("The sum of ".concat(firstNum, " and ").concat(secondNum, " is = ").concat(ans));
    }
    else if (operator === "-") {
        ans = firstNum - secondNum;
        console.log("The difference of ".concat(firstNum, " and ").concat(secondNum, " is = ").concat(ans));
    }
    else if (operator === "*") {
        ans = firstNum * secondNum;
        console.log("The product of ".concat(firstNum, " and ").concat(secondNum, " is = ").concat(ans));
    }
    else if (operator === "/") {
        ans = firstNum / secondNum;
        console.log("The quotient of ".concat(firstNum, " and ").concat(secondNum, " is = ").concat(ans));
    }
    else {
        console.log("There has been an error, please try again");
    }
    console.log("Answer: ".concat(ans));
    return ans;
}
;
inputCalc();
