import { divide, minus, multiply, sum } from "../index";


describe('sum should', () => {
  test.each`
    arr             | expected
    ${[]}           | ${0}
    ${[42]}         | ${42}
    ${[1, 2]}       | ${3}
    ${[1, 2, 3, 4]} | ${10}
    ${[-1, 0, 1]}   | ${0}
  `('return $expected when called with $arr', ({ arr, expected }) => {
    expect(sum(...arr)).toBe(expected);
  });
});

describe('minus should', () => {
  test.each`
    arr              | expected
    ${[]}            | ${0}
    ${[2, 1]}        | ${1}
    ${[20, 2, 3, 5]} | ${10}
    ${[-1, 0, 1]}    | ${-2}
    ${[-1, -3]}      | ${2}
    ${[3]}           | ${3}
  `('return $expected when called with $arr', ({ arr, expected }) => {
    expect(minus(...arr)).toBe(expected);
  });
});

describe("multiply", () => {
  test("times positive integers", () => {
    expect(multiply(3, 5)).toBe(15);
  });
});

describe("divide", () => {
  test("divide positive integers", () => {
    expect(divide(50, 10)).toBe(5);
  });
});

// test("true=true system check", () => {
//   expect(true).toBe(true);
// });

// describe("sum", () => {
//   test("should add positive integers", () => {
//     expect(sum(50, 60)).toBe(110);
//   });

//   test("add negative integers", () => {
//     expect(sum(-100, -50)).toBe(-150);
//   });

//   test("add zeros", () => {
//     expect(sum(0, 0)).toBe(0);
//   });

//   test("several numbers", () => {
//     expect(sum(0, 1, 2, 3, 4, 15, -5)).toBe(20);
//   });
// });