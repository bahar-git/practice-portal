/* 31.  isOdd
Write a function called "isOdd".
Given a number, "isOdd" returns whether the given number is odd.
var output = isOdd(9);
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(9)); */

// 2nd way
/* function isOdd(num) {
  return num % 2 !== 0 ? true : false;
}
console.log(isOdd(9)); */

// 3rd way
/* function isOdd(num) {
  switch (true) {
    case num % 2 !== 0:
      return true;
      break;
    default:
      return false;
  }
}
console.log(isOdd(9)); */

/* 32.  isSameLength
Write a function called "isSameLength".
Given two words, "isSameLength" returns whether the given words have the same length.
var output = isSameLength('words', 'super');
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isSameLength(str1, str2) {
  return str1.length === str2.length ? true : false;
}
console.log(isSameLength("words", "super")); */

// 2nd way
/* function isSameLength(str1, str2) {
  switch (true) {
    case str1.length === str2.length:
      return true;
      break;
    default:
      return false;
  }
}
console.log(isSameLength("words", "super")); */

/* 33.  areBothOdd
Write a function called "areBothOdd".
Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
var output = areBothOdd(1, 3);
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function areBothOdd(num1, num2) {
  return num1 % 2 !== 0 && num2 % 2 !== 0 ? true : false;
}
console.log(areBothOdd(1, 3)); */

// 2nd way
/* function areBothOdd(num1, num2) {
  switch (true) {
    case num1 % 2 !== 0 && num2 % 2 !== 0:
      return true;
      break;
    default:
      return false;
  }
}
console.log(areBothOdd(1, 3)); */

/* 34.  isEitherEven
Write a function called "isEitherEven".
Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
var output = isEitherEven(1, 4);
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isEitherEven(num1, num2) {
  return num1 % 2 === 0 || num2 % 2 === 0 ? true : false;
}
console.log(isEitherEven(1, 4)); */

// 2nd way
/* function isEitherEven(num1, num2) {
  switch (true) {
    case num1 % 2 === 0 || num2 % 2 === 0:
      return true;
      break;
    default:
      return false;
  }
}
console.log(isEitherEven(1, 4)); */

/* 35.  isOddLength
Write a function called "isOddLength".
Given a word, "isOddLength" returns whether the length of the given word is odd.
var output = isOddLength('special');
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isOddLength(str) {
  return str.length % 2 !== 0 ? true : false;
}
console.log(isOddLength("special")); */

// 2nd way
/* function isOddLength(str) {
  switch (true) {
    case str.length % 2 !== 0:
      return true;
      break;
    default:
      return false;
  }
}
console.log(isOddLength("special")); */

/* 36.  isEvenLength
Write a function called "isEvenLength".
Given a word, "isEvenLength" returns whether the length of the word is even.
var output = isEvenLength('wow');
console.log(output); // --> false
Related Topics: Variables */

// 1st way
/* function isEvenLength(str) {
  return str.length % 2 === 0 ? true : false;
}
console.log(isEvenLength("wow")); */

// 2nd way
/* function isEvenLength(str) {
  switch (true) {
    case str.length % 2 === 0:
      return true;
      break;
    default:
      return false;
  }
}
console.log(isEvenLength("wow")); */

/* 37.  isEvenAndGreaterThanTen
Write a function called "isEvenAndGreaterThanTen".
Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
Related Topics: Variables */

// 1st way
/* function isEvenAndGreaterThanTen(num) {
  return num % 2 === 0 && num > 10 ? true : false;
}
console.log(isEvenAndGreaterThanTen(13)); */

// 2nd way
/* function isEvenAndGreaterThanTen(num) {
  switch (true) {
    case num % 2 === 0 && num > 10:
      return true;
      break;
    default:
      return false;
  }
}
console.log(isEvenAndGreaterThanTen(13)); */

/* 38.  average
Write a function called "average".
Given two numbers, "average" returns their average.
var output = average(4, 6);
console.log(output); // --> 5
Related Topics: Variables */

/* function average(num1, num2) {
  return (num1 + num2) / 2;
}
console.log(average(4, 6)); */

/* 39.  computeAreaOfATriangle
Write a function called "computeAreaOfATriangle".
Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
Related Topics: Variables */

/* function computeAreaOfATriangle(base, height) {
  return (height * base) / 2;
}
console.log(computeAreaOfATriangle(4, 6)); */

/* 40.  cube
Write a function called "cube".
Given a number, "cube" returns the cube of that number.
var output = cube(3);
console.log(output); // --> 27
Related Topics: Variables */

// 1st way
/* function cube(num) {
  return num ** 3;
}
console.log(cube(3)); */

// 2nd way
/* function cube(num) {
  return Math.pow(num, 3);
}
console.log(cube(3)); */

/* 41.  square
Write a function called "square".
Given a number, "square" should return the square of the given number.
var output = square(5);
console.log(output); // --> 25
Related Topics: Variables */

// 1st way
/* function square(num) {
  return num ** 2;
}
console.log(square(5)); */

// 2nd way
/* function square(num) {
  return Math.pow(num, 2);
}
console.log(square(5)); */

/* 42.  computeAverageLengthOfWords
Write a function called "computeAverageLengthOfWords".
Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
Related Topics: Variables */

/* function computeAverageLengthOfWords(str1, str2) {
  return (str1.length + str2.length) / 2;
}
console.log(computeAverageLengthOfWords("code", "programs")); */

/* 43.  computeAreaOfARectangle
Write a function called "computeAreaOfARectangle".
Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.
var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32
Related Topics: Variables */

/* function computeAreaOfARectangle(length, width) {
  return length * width;
}
console.log(computeAreaOfARectangle(4, 8)); */

/* 44.  computePerimeterOfARectangle
Write a function called "computePerimeterOfARectangle".
Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
Related Topics: Variables */

/* function computePerimeterOfARectangle(length, width) {
  return 2 * (length + width);
}
console.log(computePerimeterOfARectangle(5, 2)); */

/* 45.  computePerimeterOfATriangle
Write a function called "computePerimeterOfATriangle".
Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.
var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20
Related Topics: Variables */

/* function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}
console.log(computePerimeterOfATriangle(6, 4, 10)); */

/* 46.  computePower
Write a function called "computePower"
. Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.
var output = computePower(2, 3);
console.log(output); // --> 8
Related Topics: Variables */

// 1st way
/* function computePower(num, exponent) {
  return num ** exponent;
}
console.log(computePower(2, 3)); */

// 2nd way
/* function computePower(num, exponent) {
  return Math.pow(num, exponent);
}
console.log(computePower(2, 3)); */

/* 47.  computeSquareRoot
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3
Related Topics: Variables */

/* function computeSquareRoot(num) {
  return Math.sqrt(num);
}
console.log(computeSquareRoot(9)); */

/* 48.  getLastElement
Write a function called "getLastElement".
Given an array, "getLastElement" returns the last element of the given array. Notes:* If the given array has a length of 0, it should return 'undefined'.
var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
Related Topics: Loop, Array */

// 1st way
/* function getLastElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[arr.length - 1];
  }
}
console.log(getLastElement([1, 2, 3, 4])); */

// 2nd way
/* function getLastElement(arr) {
  let num = 0;
  while (num < arr.length) {
    num++;
    return arr[arr.length - 1];
  }
}
console.log(getLastElement([1, 2, 3, 4])); */

/* 49.  addToFront
Write a function called "addToFront".
Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
Notes: * It should be the SAME array, not a new array.
var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
Related Topics: Array */

/* function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}
console.log(addToFront([1, 2], 3)); */

/* 50.  addToBack
Write a function called "addToBack".
Given an array and an element, "addToBack" returns the given array with the given element added to the end.
Note: It should be the SAME array, not a new array.
var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
Related Topics: Array */

/* function addToBack(arr, element) {
  arr.push(element);
  return arr;
}
console.log(addToBack([1, 2], 3)); */
