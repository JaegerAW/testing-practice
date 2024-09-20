/*
const myFunctions = require("./module.js");
test("adds 1 + 2 = 3", () => {
  expect(myFunctions.sum(1 + 2)).toBe(3);
});
*/
//const sum = require("./module"); //require file name without js if import single function.
const {
  add,
  subtract,
  multiply,
  divide,
  capitalize,
  reverseString,
  caesarCipherOne,
  analyzeArray,
} = require("./module.js");

test("adds 1 +  2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 2 - 1 = 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("multiply 2 * 3 = 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide 100 by 2 to be 50", () => {
  expect(divide(100, 2)).toBe(50);
});

test("capitalize first letter of a string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("caesar cipher", () => {
  expect(caesarCipherOne("Hello World!", 3)).toBe("Khoor Zruog!");
});

test("analyze average", () => {
  expect(analyzeArray([1, 2, 3, 4]).average).toBe(2.5);
});

test("anaylize min", () => {
  expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
});

test("analyze max", () => {
  expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
});

test("analyze length", () => {
  expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
});
