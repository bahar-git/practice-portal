/* 61.  getAllElementsButNth
Write a function called "getAllElementsButNth".
Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
Related Topics: Array */

/* function getAllElementsButNth(arr, index) {
  arr.splice(index, 1);
  return arr;
}
console.log(getAllElementsButNth(["a", "b", "c"], 1)); */

/* 62.  removeElement
Write a function called "removeElement".
Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.
Notes:  If all the elements match, it should return an empty array.
If an empty array is passed in, it should return an empty array.
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
Related Topics: Array, Loop */

// 1st way - same array
/* function removeElement(arr, discarder) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] === discarder ? arr.splice(i, 1) : null;
  }
  return arr;
}
console.log(removeElement([1, 2, 3, 2, 1], 2));
console.log(removeElement([2, 2, 2, 2, 2], 2)); */

// 2nd way - same array
/* function removeElement(arr, discarder) {
  let index = arr.length - 1;
  while (index >= 0) {
    switch (true) {
      case arr[index] === discarder:
        arr.splice(index, 1);
        break;
      default:
        null;
    }
    index--;
  }
  return arr;
}
console.log(removeElement([1, 2, 3, 2, 1], 2));
console.log(removeElement([2, 2, 2, 2, 2], 2)); */

// 3rd way - new array
/* function removeElement(arr, discarder) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== discarder ? output.push(arr[i]) : null;
  }
  return output;
}
console.log(removeElement([1, 2, 3, 2, 1], 2));
console.log(removeElement([2, 2, 2, 2, 2], 2)); */

// 4th way - new array
/* function removeElement(arr, discarder) {
  let output = [];
  let index = arr.length - 1;
  while (index >= 0) {
    switch (true) {
      case arr[index] !== discarder:
        output.push(arr[index]);
        break;
      default:
    }
    index--;
  }
  return output;
}
console.log(removeElement([1, 2, 3, 2, 1], 2));
console.log(removeElement([2, 2, 2, 2, 2], 2)); */

/* 63.  getIndexOf
Write a function called "getIndexOf".
Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.
Notes:  Strings are zero indexed, meaning the first character in a string is at position 0.
When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
If the character does not exist in the string, it should return -1.
Do not use the native indexOf function in your implementation.
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
Related Topics: Array, Loop */

/* function getIndexOf(char, str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
  return -1;
}
console.log(getIndexOf("a", "I am a hacker")); */

/* 64.  findMinLengthOfThreeWords
Write a function called "findMinLengthOfThreeWords".
Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
Related Topics: Variables */

// 1st way
/* function findMinLengthOfThreeWords(str1, str2, str3) {
  return str1.length < str2.length && str1.length < str3.length
    ? str1.length
    : str2.length < str1.length && str2.length < str3.length
    ? str2.length
    : str3.length;
}
console.log(findMinLengthOfThreeWords("a", "be", "see")); */

// 2nd way
/* function findMinLengthOfThreeWords(str1, str2, str3) {
  const arrStr = [str1.length, str2.length, str3.length];
  return Math.min(...arrStr);
}
console.log(findMinLengthOfThreeWords("a", "be", "see")); */

// 3rd way
/* function findMinLengthOfThreeWords(str1, str2, str3) {
  return Math.min(str1.length, str2.length, str3.length);
}
console.log(findMinLengthOfThreeWords("a", "be", "see")); */

/* 65.  findMaxLengthOfThreeWords
Write a function called "findMaxLengthOfThreeWords".
Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
Related Topics: Variables */

/* function findMinLengthOfThreeWords(str1, str2, str3) {
  return Math.max(str1.length, str2.length, str3.length);
}
console.log(findMinLengthOfThreeWords("a", "be", "see")); */

/* 66.  filterOddLengthWords
Write a function called "filterOddLengthWords".
Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.
var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
Related Topics: Array, Loop */

// 1st way - same array
/* function filterOddLengthWords(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length % 2 === 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(filterOddLengthWords(["there", "it", "is", "now"])); */

// 2nd way - new array
/* function filterOddLengthWords(arr) {
  let output = [];
  let index = 0;
  while (index <= arr.length - 1) {
    switch (true) {
      case arr[index].length % 2 !== 0:
        output.push(arr[index]);
        break;
      default:
    }
    index++;
  }
  return output;
}
console.log(filterOddLengthWords(["there", "it", "is", "now"])); */

/* 67.  filterEvenLengthWords
Write a function called "filterEvenLengthWords".
Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
Related Topics: Array, Loop */

// 1st way - same array
/* function filterEvenLengthWords(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i].length % 2 !== 0 ? arr.splice(i, 1) : null;
  }
  return arr;
}
console.log(filterEvenLengthWords(["word", "words", "word", "words"])); */

// 2nd way - new array
/* function filterEvenLengthWords(arr) {
  let output = [];
  let index = 0;
  while (index <= arr.length - 1) {
    switch (true) {
      case arr[index].length % 2 === 0:
        output.push(arr[index]);
        break;
      default:
    }
    index++;
  }
  return output;
}
console.log(filterEvenLengthWords(["word", "words", "word", "words"])); */

// 3rd way - new array
/* function filterEvenLengthWords(arr) {
  let output = [];
  for (let el of arr) {
    if (el.length % 2 === 0) {
      output.push(el);
    }
  }
  return output;
}
console.log(filterEvenLengthWords(["word", "words", "word", "words"])); */

/* 68.  getLengthOfLongestElement
Write a function called "getLengthOfLongestElement".
Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.
Notes:  It should return 0 if the array is empty.
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
Related Topics: Array, Loop */

// 1st way
/* function getLengthOfLongestElement(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return Math.max(...lengths);
}
console.log(getLengthOfLongestElement(["one", "two", "three"])); */

// 2nd way
/* function getLengthOfLongestElement(arr) {
  let max = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    arr[i].length > max ? (max = arr[i].length) : max;
  }
  return max;
}
console.log(getLengthOfLongestElement(["one", "two", "three"])); */

// 3rd way
/* function getLengthOfLongestElement(arr) {
  let max = arr[0].length;
  for (let el of arr) {
    el.length > max ? (max = el.length) : max;
  }
  return max;
}
console.log(getLengthOfLongestElement(["one", "two", "three"])); */

/* 69.  countCharacter
Write a function called "countCharacter".
Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
Related Topics: Loop */

/* function countCharacter(str, char) {
  let counter = 0;
  let i = 0;
  while (i <= str.length - 1) {
    if (str[i] === char) counter++;
    i++;
  }
  return counter;
}
console.log(countCharacter("I am a hacker", "a")); */

/* 70.  getAllLetters
Write a function called "getAllLetters".
Given a word, "getAllLetters" returns an array containing every character in the word. Notes:* If given an empty string, it should return an empty array.
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
Related Topics: Variables, Loop */

// 1st way
/* function getAllLetters(str) {
  return str.split("");
}
console.log(getAllLetters("Radagast")); */

// 2nd way
/* function getAllLetters(str) {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    output.push(str[i]);
  }
  return output;
}
console.log(getAllLetters("Radagast")); */

/* 71.  getAllWords
Write a function called "getAllWords".
Given a sentence, "getAllWords" returns an array containing every word in the sentence. Notes:* If given an empty string, it should return an empty array.
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
Related Topics: Variables */

/* function getAllWords(str) {
  if (str.length === 0) return [];  // if(!str.length) return []
  return str.split(" ");
}
console.log(getAllWords("Radagast the Brown")); */

/* 72.  countdown
Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array's 'zeroth' element) down to 0 (as the last element). How long is this array?
`countdown(5) // [5,4,3,2,1,0]`
Related Topics: Loop */

/* function countdown(num) {
  let output = [];
  for (let i = num; i >= 0; i--) {
    output.push(i);
  }
  return output;
}
console.log(countdown(5)); */

/* 73.  print
Your function will receive an array with two numbers. Print the first value,and return the second.
`print([3,5]) // print 3 and return 5`
Related Topics: Variables */

/* function print(arr) {
  console.log(arr[0]);
  return arr[1];
}
console.log(print([3, 5])); */

/* 74.  isEitherEvenOrAreBoth7
Write a function called "isEitherEvenOrAreBoth7".
Given two numbers, 'isEitherEvenOrAreBoth7' returns true if at least one of the parameters is even, or, both of them are equal to 7.
var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false
var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isEitherEvenOrAreBoth7(num1, num2) {
  return num1 % 2 === 0 || num2 % 2 === 0
    ? true
    : num1 === 7 && num2 === 7
    ? true
    : false;
}
console.log(isEitherEvenOrAreBoth7(3, 7));
console.log(isEitherEvenOrAreBoth7(2, 3));
console.log(isEitherEvenOrAreBoth7(7, 7)); */

// 2nd way
/* function isEitherEvenOrAreBoth7(num1, num2) {
  switch (true) {
    case num1 % 2 === 0 || num2 % 2 === 0:
      return true;
    case num1 === 7 && num2 === 7:
      return true;
    default:
      return false;
  }
}
console.log(isEitherEvenOrAreBoth7(3, 7));
console.log(isEitherEvenOrAreBoth7(2, 3));
console.log(isEitherEvenOrAreBoth7(7, 7)); */

/* 75.  isEitherEvenAndLessThan9
Write a function called "isEitherEvenAndLessThan9".
Given two numbers, 'isEitherEvenAndLessThan9' returns true if at least one of them is even, and, both of them are less than 9.
var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false
Related Topics: Variables */

// 1st way
/* function isEitherEvenAndLessThan9(num1, num2) {
  if ((num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9) {
    return true;
  } else {
    return false;
  }
}
console.log(isEitherEvenAndLessThan9(2, 4));
console.log(isEitherEvenAndLessThan9(72, 2));
console.log(isEitherEvenAndLessThan9(7, 1)); */

// 2nd way
/* function isEitherEvenAndLessThan9(num1, num2) {
  switch (true) {
    case (num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9:
      return true;
    default:
      return false;
  }
}
console.log(isEitherEvenAndLessThan9(2, 4));
console.log(isEitherEvenAndLessThan9(72, 2));
console.log(isEitherEvenAndLessThan9(7, 1)); */

/* 76.  fahrenheitToCelsius
Kelvin wants to convert between temperature scales.
Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees.
Notes:* Fahrenheit = (9/5 * Celsius) + 32.
`fahrenheitToCelsius(90) // 32`
Related Topics: Variables */

/* function fahrenheitToCelsius(fDegrees) {
  return Math.floor(((fDegrees - 32) * 5) / 9);
}
console.log(fahrenheitToCelsius(90)); */

/* 77.  celsiusToFahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
`celsiusToFahrenheit(27) // 80`
Related Topics: Variables */

/* function celsiusToFahrenheit(cDegrees) {
  return Math.floor((9 / 5) * cDegrees + 32);
}
console.log(celsiusToFahrenheit(27)); */

/* 78.  makeitBig
Write a function called "makeitBig".
Given an array, write a function that changes all positive numbers in the array to "big".
`makeitBig([-1,3,5,-5]) // [-1, "big","big",-5];`
Related Topics: Loop */

// 1st way - same array
/* function makeitBig(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] > 0 ? arr.splice(i, 1, "big") : null;
  }
  return arr;
}
console.log(makeitBig([-1, 3, 5, -5])); */

// 2nd way - same array
/* function makeitBig(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    } else {
      arr[i] = arr[i];
    }
  }
  return arr;
}
console.log(makeitBig([-1, 3, 5, -5])); */

// 3rd way - new array
/* function makeitBig(arr) {
  let result = [];
  for (let el of arr) {
    el > 0 ? result.push("big") : result.push(el);
  }
  return result;
}
console.log(makeitBig([-1, 3, 5, -5])); */

/* 79.  double
Write a function called "double".
Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2, 4, 6] without changing original.
`double([1,2,3]) // [2, 4, 6]`
Related Topics: Array, Loop */

/* function double(arr) {
  let result = [];
  for (let el of arr) {
    result.push(el + el);
  }
  return result;
}
console.log(double([1, 2, 3])); */

/* 80.  prevLen
You are passed an array containing string, Working within that same array, replace each string with a number - the length of the string previous array index - and return the array 'k
`prevLen(['av','s','asdb','adfgb']) // [5,2,1,4]`
Related Topics: Array, Loop */

// 1st way - same array
/* function prevLen(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1, arr[i].length);
  }
  const lastOne = arr.pop();
  arr.unshift(lastOne);
  return arr;
}
console.log(prevLen(["av", "s", "asdb", "adfgb"])); */

// 2nd way - new array
/* function prevLen(arr) {
  const solution = [];
  for (let i = 0; i < arr.length; i++) {
    solution.push(arr[i].length);
  }
  const lastElement = solution.pop();
  solution.unshift(lastElement);
  return solution;
}
console.log(prevLen(["av", "s", "asdb", "adfgb"])); */
