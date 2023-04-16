"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumFactorial = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function sumFactorial() {
    var total = 0, count = 1;
    while (count <= 11) {
        total += count;
        count += 1;
    }
    console.log(total);
}
exports.sumFactorial = sumFactorial;

sumFactorial();
