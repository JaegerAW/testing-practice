const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const capitalize = (string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string.charAt(i).toUpperCase();
    } else {
      newString += string.charAt(i);
    }
  }
  return newString;
};

const reverseString = (string) => {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
};

const caesarCipherOne = (string, key) => {
  let newString = "";
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let stringArray = string.split("");
  const bigLateChar = (s) => {
    // see if char is uppercase AND will shift over Z
    if (alphabets.indexOf(s) > 25 && alphabets.indexOf(s) + key > 51) {
      return true;
    } else return false;
  };
  const smallLateChar = (s) => {
    //see if char is lowercase AND will shift over z
    if (alphabets.indexOf(s) <= 25 && alphabets.indexOf(s) + key > 25)
      return true;
    else {
      return false;
    }
  };
  for (let element of stringArray) {
    //loop thru the string array, stringarray = [h,e,l,l,o, ];
    if (alphabets.includes(element)) {
      if (bigLateChar(element) || smallLateChar(element)) {
        newString += alphabets.charAt(alphabets.indexOf(element) - 26 + key);
      } else {
        newString += alphabets.charAt(alphabets.indexOf(element) + key);
      }
    } else {
      newString += element;
    }
  }
  return newString;
};

const analyzeArray = (array) => {
  array.sort((a, b) => a - b);
  let averageElement;
  let minElement = array[0];

  let lengthElement = array.length;
  let maxElement = array[lengthElement - 1];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  averageElement = sum / lengthElement;
  const result = {
    average: averageElement,
    min: minElement,
    max: maxElement,
    length: lengthElement,
  };
  return result;
};

//module.exports = sum;
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  capitalize,
  reverseString,
  caesarCipherOne,
  analyzeArray,
};

//hello
//01234
