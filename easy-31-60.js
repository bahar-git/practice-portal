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
