import { divide, minus, multiply, sum } from "../index";

// test("true=true system check", () => {
//   expect(true).toBe(true);
// });

describe("sum", () => {
  test("should add positive integers", () => {
    expect(sum(50, 60)).toBe(110);
  });

  test("add negative integers", () => {
    expect(sum(-100, -50)).toBe(-150);
  });

  test("add zeros", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("minus", () => {
  test("minus positive integers", () => {
    expect(minus(100, 99)).toBe(1);
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
