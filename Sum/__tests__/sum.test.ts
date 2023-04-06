import { sum } from "../index";
// test("true=true system check", () => {
//   expect(true).toBe(true);
// });

describe("sum", () => {
  test("add positive integers", () => {
    expect(sum(50, 60)).toBe(110);
  });

  test("add negative integers", () => {
    expect(sum(-100, -50)).toBe(-150);
  });

  test("add zeros", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
