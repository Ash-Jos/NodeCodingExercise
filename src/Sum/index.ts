// export function sum(a: number, b: number): number {
//   return a + b;
// }
export function sum(...arr: number[]): number {
  return [...arr].reduce((acc, val) => acc + val, 0);
}

export function minus(...arr: number[]): number {
    if (arr.length === 0) return 0;
  return [...arr].reduce((acc, val) => acc - val);
}

// export function minus(...arr: number[]): number {
//   if (arr.length === 0) return 0;
//   if (arr.length === 1) return arr[0];
//   return arr.slice(1).reduce((acc, val) => acc - val, arr[0]);
// }

export function multiply(...arr: number[]): number {
  return [...arr].reduce((acc, val) => acc * val);
}

// export function multiply(a: number, b: number): number {
//   return a * b;
// }

export function divide(...arr: number[]): number {
  return [...arr].reduce((acc, val) => acc / val);
}

// export function divide(a: number, b: number): number {
//   return a / b;
// }

// for (let i = 1; i <= 7; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "#";
//   }
//   console.log(row);
// }

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

export function sumFactorial() {
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
}
