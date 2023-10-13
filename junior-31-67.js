/* 31.  getSmallestElementAtProperty
Write a function called "getSmallestElementAtProperty".
Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.
Notes:  If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
Related Topics: Function, Object */

/* var obj = {
  key: [2, 1, 5],
};

// 1st way
function getSmallestElementAtProperty(obj, key) {
  if (
    !Array.isArray(obj[key]) ||
    obj[key].length === 0 ||
    !obj.hasOwnProperty(key)
  )
    return undefined;
  return Math.min(...obj[key]);
}
console.log(getSmallestElementAtProperty(obj, "key")); */

// 2nd way
/* function getSmallestElementAtProperty(obj, key) {
  if (
    !Array.isArray(obj[key]) ||
    obj[key].length === 0 ||
    !obj.hasOwnProperty(key)
  )
    return undefined;
  let result = obj[key][0];
  for (let el of obj[key]) {
    if (el < result) {
      result = el;
    }
  }
  return result;
}
console.log(getSmallestElementAtProperty(obj, "key")); */

////////////////////////////////////////////////////////////////

/* 32.  squareElements
Write a function called "squareElements".
Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.
var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
Related Topics: Function, Array */

// 1st way
/* function squareElements(arr) {
  let result = [];
  for (let el of arr) {
    result.push(el ** 2);
  }
  return result;
}
console.log(squareElements([1, 2, 3])); */

// 2nd way
/* function squareElements(arr) {
  return arr.map((el) => el * el);
}
console.log(squareElements([1, 2, 3])); */

////////////////////////////////////////////////////////////////

/* 33.  computeProductOfAllElements
Write a function called "computeProductOfAllElements".
Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.
Notes:  If given array is empty, it should return 0.
var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
Related Topics: Function, Array */

// 1st way
/* function computeProductOfAllElements(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let sum = 1;
  for (let el of arr) {
    sum *= el;
  }
  return sum;
}
console.log(computeProductOfAllElements([2, 5, 6])); */

// 2nd way
/* function computeProductOfAllElements(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return arr.reduce((acc, currVal) => {
    return (acc *= currVal);
  }, 1);
}
console.log(computeProductOfAllElements([2, 5, 6])); */

////////////////////////////////////////////////////////////////

/* 34.  filterEvenElements
Write a function called "filterEvenElements".
Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.
var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
Related Topics: Function, Array */

// 1st way
/* function filterEvenElements(arr) {
  return arr.filter((el) => el % 2 === 0);
}
console.log(filterEvenElements([2, 3, 4, 5, 6])); */

// 2nd way - same array
/* function filterEvenElements(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(filterEvenElements([2, 3, 4, 5, 6])); */

// 3rd way - new array
/* function filterEvenElements(arr) {
  let output = [];
  let i = 0;
  while (i < arr.length) {
    switch (true) {
      case arr[i] % 2 === 0:
        output.push(arr[i]);
        break;
      default:
    }
    i++;
  }
  return output;
}
console.log(filterEvenElements([2, 3, 4, 5, 6])); */

////////////////////////////////////////////////////////////////

/* 35.  getLengthOfShortestElement
Write a function called "getLengthOfShortestElement".
Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.
Notes:  It should return 0 if the array is empty.
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
Related Topics: Function, Array */

// 1st way
/* function getLengthOfShortestElement(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let lengthArr = [];
  for (let el of arr) {
    lengthArr.push(el.length);
  }
  return Math.min(...lengthArr);
}
console.log(getLengthOfShortestElement(["one", "two", "three"])); */

// 2nd way
/* function getLengthOfShortestElement(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let lengthArr = arr[0].length;
  for (let el of arr) {
    if (el.length < lengthArr) {
      lengthArr = el.length;
    }
  }
  return lengthArr;
}
console.log(getLengthOfShortestElement(["one", "two", "three"])); */

////////////////////////////////////////////////////////////////

/* 36.  getLongestElement
Write a function called "getLongestElement".
Given an array, "getLongestElement" returns the longest string in the given array.
Notes:  If there are ties, it returns the first element to appear.
If the array is empty, it should return an empty string.
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
Related Topics: Function, Array */

/* function getLongestElement(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) return "";
  let output = arr[0];
  for (let el of arr) {
    if (el.length > output.length) {
      output = el;
    }
  }
  return output;
}
console.log(getLongestElement(["one", "two", "three", "df"])); */

////////////////////////////////////////////////////////////////

/* 37.  findSmallestElement
Write a function called "findSmallestElement".
Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.
Notes:  If the given array is empty, it should return 0.
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
Related Topics: Function, Array */

// 1st way
/* function findSmallestElement(arr) {
  if (arr.length < 1 || !Array.isArray(arr)) return 0;
  return Math.min(...arr);
}
console.log(findSmallestElement([4, 1, 9, -5, 10])); */

// 2nd way
/* function findSmallestElement(arr) {
  if (arr.length < 1 || !Array.isArray(arr)) return 0;
  let output = arr[0];
  for (let el of arr) {
    if (el < output) {
      output = el;
    }
  }
  return output;
}
console.log(findSmallestElement([4, 1, 9, 10])); */

////////////////////////////////////////////////////////////////

/* 38.  findShortestElement
Write a function called "findShortestElement".
Given an array, "findShortestElement" returns the shortest string within the given array.
Notes:  If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string.
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
Related Topics: Function, Array */

/* function findShortestElement(arr) {
  switch (true) {
    case arr.length < 1 || !Array.isArray(arr):
      return "";
    default:
  }
  let result = arr[0];
  let i = 0;
  while (i < arr.length) {
    if (arr[i].length < result.length) {
      result = arr[i];
    }
    i++;
  }
  return result;
}
console.log(findShortestElement(["a", "two", "three"])); */

////////////////////////////////////////////////////////////////

/* 39.  computeSumOfAllElements
Write a function called "computeSumOfAllElements".
Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.
var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
Related Topics: Function, Array */

/* function computeSumOfAllElements(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}
console.log(computeSumOfAllElements([1, 2, 3]));
console.log(computeSumOfAllElements([-10, 10])); */

////////////////////////////////////////////////////////////////

/* 40.  calculateBillTotal
Write a function called "calculateBillTotal".
Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
Notes:  Assume that sales tax is 9.5% and tip is 15%.
Do NOT tip on the sales tax, only on the pre tip amount.
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
Related Topics: Function */

/* function calculateBillTotal(preTaxAndPreTipAmount) {
  const tipPercent = 15;
  const taxPercent = 9.5;
  const tipAmount = (preTaxAndPreTipAmount * tipPercent) / 100;
  const taxAmount = (preTaxAndPreTipAmount * taxPercent) / 100;
  const total = preTaxAndPreTipAmount + tipAmount + taxAmount;
  return total;
}
console.log(calculateBillTotal(20)); */

////////////////////////////////////////////////////////////////

/* 41.  printAverage0fArray
Analyze an array's values and print the average.
var arr = [1,2,3,4]
`printAverage0fArray(arr) // 2.5`
Related Topics: Function, Array */

/* function printAverage0fArray(arr) {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum / arr.length;
}
console.log(printAverage0fArray([1, 2, 3, 4]));
console.log(printAverage0fArray([100, 50, 24])); */

////////////////////////////////////////////////////////////////

/* 42.  returnOdds
Return Odds from an Array
returnOdds([1,2,3,4]) // [1,3]
Related Topics: Function, Array */

// 1st way
/* const returnOdds = (arr) => {
  return arr.filter((el) => el % 2 !== 0);
};
console.log(returnOdds([1, 2, 3, 4])); */

// 2nd way - same array
/* const returnOdds = (arr) => {
  let i = arr.length - 1;
  while (i >= 0) {
    if (arr[i] % 2 === 0) {
      arr.splice(i, 1);
    }
    i--;
  }
  return arr;
};
console.log(returnOdds([1, 2, 3, 4])); */

// 3rd way - new array
/* const returnOdds = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) output.push(arr[i]);
  }
  return output;
};
console.log(returnOdds([1, 2, 3, 4])); */

////////////////////////////////////////////////////////////////

/* 43.  Return Array Count Greater than Y.
Given an array and a value Y. count and print the number of array values greater than Y.
`countGreaterThanY([1,2,3], 2) //1`
`countGreaterThanY([2,2,2], 0) //3`
Related Topics: Function, Array */

/* const countGreaterThanY = (arr, y) => {
  let counter = 0;
  for (let el of arr) {
    if (el > y) counter++;
  }
  return counter;
};
console.log(countGreaterThanY([1, 2, 3], 2));
console.log(countGreaterThanY([2, 2, 2], 0)); */

////////////////////////////////////////////////////////////////

/* 44.  printMax
Given an array, print the max.
`printMax([1,-12,3,1,0]) //3`
`printMax([2,2,2]) //2`
Related Topics: Function, Array */

// 1st way
/* const printMax = (arr) => {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) result = arr[i];
  }
  return result;
};
console.log(printMax([1, -12, 3, 1, 0]));
console.log(printMax([2, 2, 2])); */

// 2nd way
/* const printMax = (arr) => {
  return Math.max(...arr);
};
console.log(printMax([1, -12, 3, 1, 0]));
console.log(printMax([2, 2, 2])); */

////////////////////////////////////////////////////////////////

/* 45.  scaleArr
Given array arr and number num, multiply each arr value by num, and return the changed arr.
`scale([2,3,4],5) // [10,15,20]`
Related Topics: Function, Array */

// 1st way - new array
/* const scaleArr = (arr, num) => {
  let output = [];
  for (let el of arr) {
    output.push(el * num);
  }
  return output;
};
console.log(scaleArr([2, 3, 4], 5)); */

// 2nd way - same array
/* const scaleArr = (arr, num) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i] * num;
  }
  return arr;
};
console.log(scaleArr([2, 3, 4], 5)); */

// 3rd way
/* const scaleArr = (arr, num) => {
  return arr.map((el) => el * num);
};
console.log(scaleArr([2, 3, 4], 5)); */

////////////////////////////////////////////////////////////////

/* 46.  reverse
Reverse Array.
Given array, write a function to reverse values in-place.
`reverse([34,6,4,2]) // [2,4,6,34]`
Related Topics: Function, Array */

/* function reverse(arr) {
  let output = [];
  if (Array.isArray(arr)) {
    for (let i = arr.length - 1; i >= 0; i--) {
      output.push(arr[i]);
    }
  } else {
    for (let i = arguments.length - 1; i >= 0; i--) {
      output.push(arguments[i]);
    }
  }
  return output;
}
console.log(reverse([34, 6, 4, 2]));
console.log(reverse("a", "c", "b", "d")); */

////////////////////////////////////////////////////////////////

/* 47.  squareArrayVals
Square each value in a given array, returning that same array with changed values.
`squareArrayVals(arr)`
Related Topics: Function, Array */

// 1st way
/* function squareArrayVals() {
  let arr = arguments[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
  return arr;
}
console.log(squareArrayVals([2, 3, 4]));
console.log(squareArrayVals([1, 10, 30])); */

// 2nd way
/* function squareArrayVals() {
  let arr = arguments[0];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.splice(i, 1, arr[i] ** 2);
  }
  return arr;
}
console.log(squareArrayVals([2, 3, 4]));
console.log(squareArrayVals([1, 10, 30])); */

////////////////////////////////////////////////////////////////

/* 48.  zeroOutArrayNegativeVals
Zero Out Array Negative Numbers
Return the given array, after setting any negative values to zero.
`zeroOutArrayNegativeVals(arr)`
Related Topics: Function, Array */

// 1st way
/* function zeroOutArrayNegativeVals() {
  let arr = arguments[0];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 1) {
      arr.splice(i, 1, 0);
    }
  }
  return arr;
}
console.log(zeroOutArrayNegativeVals([1, 10, -30]));
console.log(zeroOutArrayNegativeVals([1, 10, 30])); */

// 2nd way
/* function zeroOutArrayNegativeVals() {
  let arr = arguments[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) {
      arr[i] = 0;
    }
  }
  return arr;
}
console.log(zeroOutArrayNegativeVals([1, 10, -30]));
console.log(zeroOutArrayNegativeVals([1, 10, 30])); */

////////////////////////////////////////////////////////////////

/* 49.  sigma
Implement function sigma(num) that given a number, returns the sum of all positive integers to number (inclusive).
`sigma(5) // 15 (1 + 2 + 3 + 4 + 5)`
Related Topics: Function, Loop */

/* function sigma() {
  let sum = 0;
  let num = arguments[0];
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sigma(5)); */

////////////////////////////////////////////////////////////////

/* 50.  factorial
Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).
`factorial (5) = 120 (or 1 * 2 * 3 * 4 * 5)`
Related Topics: Function, Loop */

/* function factorial(num) {
  let sum = 1;
  let i = 1;
  while (i <= num) {
    sum *= i;
    i++;
  }
  return sum;
}
console.log(factorial(5)); */

////////////////////////////////////////////////////////////////

/* 51.  generateCoinChange
Create a function which accepts cents, compute and print how to represent that amount with smallest number of coins. pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents), half-dollar(50 cents) and dollar (100 cents).
`generateCoinChange(194)
194 cents can be represented by:
[
    dollars:    1
    quarters:    3
    dimes:      1
    nickels:    1
    pennies:    4
]`
`generateCoinChange(23)`
`out: [0,0,2,0,3]`
Related Topics: Function, Array */

/* function generateCoinChange(num) {
  const coinChange = {
    dollars: 100,
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1,
  };
  let output=[]

}
console.log(generateCoinChange(194)); */

// NEED TO SOLVE

////////////////////////////////////////////////////////////////

/* 52.  sumDigits
Write a function called "sumDigits".
Given a number, "sumDigits" returns the sum of all its digits.
var output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative.
var output = sumDigits(-316);
console.log(output); // --> 4
Notes:  In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.
Related Topics: Function */

// 1st way
/* function sumDigits(num) {
  let numStr = String(num);
  let sum = 0;
  if (num >= 0) {
    for (let i = 0; i < numStr.length; i++) {
      sum += Number(numStr[i]);
    }
  } else {
    let splitNumStr = numStr.split("");
    splitNumStr.splice(0, 1);
    splitNumStr[0] *= -1;
    for (let i = 0; i < splitNumStr.length; i++) {
      sum += Number(splitNumStr[i]);
    }
  }
  return sum;
}
console.log(sumDigits(1148));
console.log(sumDigits(-316)); */

// 2nd way
/* function sumDigits(num) {
  let isNeg = num < 0;
  let numbers = (isNeg ? String(num).slice(1) : String(num))
    .split("")
    .map(Number);   // .map(el=>Number(el))
  if (isNeg) numbers[0] *= -1;
  return numbers.reduce((acc, currVal) => {
    return acc + currVal;
  });
}
console.log(sumDigits(1148));
console.log(sumDigits(-316)); */

////////////////////////////////////////////////////////////////

/* 53.  repeatString
Write a function called "repeatString".
Given a string and a number, "repeatString" returns the given string repeated the given number of times.
var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
Related Topics: Function, String */

/* function repeatString(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
console.log(repeatString("code", 3)); */

////////////////////////////////////////////////////////////////

/* 54.  getLongestOfThreeWords
Write a function called "getLongestOfThreeWords".
Given 3 words, "getLongestOfThreeWords" returns the longest of three words.
Notes:  If there is a tie, it should return the first word in the tie.
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
Related Topics: Function, String */

// 1st way
/* function getLongestOfThreeWords(str1, str2, str3) {
  let strArr = [str1, str2, str3]; // strArr.push(str1, str2, str3)
  let output = strArr[0];
  for (let el of strArr) {
    if (output.length < el.length) {
      output = el;
    }
  }
  return output;
}
console.log(getLongestOfThreeWords("these", "three", "words")); */

// 2nd way
/* function getLongestOfThreeWords(str1, str2, str3) {
  let output = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > output.length) {
      output = arguments[i];
    }
  }
  return output;
}
console.log(getLongestOfThreeWords("these", "three", "words")); */

////////////////////////////////////////////////////////////////

/* 55.  findShortestOfThreeWords
Write a function called "findShortestOfThreeWords".
Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.
Notes:  If there are ties, it should return the first word in the parameters list.
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
Related Topics: Function, String */

// 1st way
/* function findShortestOfThreeWords(str1, str2, str3) {
  let strArr = [str1, str2, str3]; // strArr.push(str1, str2, str3)
  let result = strArr[0];
  for (let el of strArr) {
    if (el.length < result.length) {
      result = el;
    }
  }
  return result;
}
console.log(findShortestOfThreeWords("a", "two", "three")); */

// 2nd way
/* function findShortestOfThreeWords(str1, str2, str3) {
  let result = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length < result.length) {
      result = arguments[i];
    }
  }
  return result;
}
console.log(findShortestOfThreeWords("a", "two", "three")); */

////////////////////////////////////////////////////////////////

/* 56.  isOddWithoutModulo
Write a function called "isOddWithoutModulo".
Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.
Note:  It does so without using the modulo operator (%).
It should work for negative numbers and zero.
var output = isOddWithoutModulo(17);
console.log(output); // --> true
Related Topics: Function */

/* function isOddWithoutModulo(num) {
  let result = false;
  let divided = Math.floor(num / 2);
  let remainder = num - divided * 2;
  if (remainder !== 0) result = true;
  return result;
}
console.log(isOddWithoutModulo(17)); */

////////////////////////////////////////////////////////////////

/* 57.  isEvenWithoutModulo
Write a function called "isEvenWithoutModulo".
Given a number, "isEvenWithoutModulo" returns whether it is even.
Notes:  It does so without using the modulo operator (%).
It should work for negative numbers and zero.
var output = isEvenWithoutModulo(8);
console.log(output); // --> true
Related Topics: Function */

/* function isEvenWithoutModulo(num) {
  let result = false;
  let divided = Math.floor(num / 2);
  let remainder = num - divided * 2;
  if (remainder === 0) result = true;
  return result;
}
console.log(isEvenWithoutModulo(8)); */

////////////////////////////////////////////////////////////////

/* 58.  multiplyBetween
Write a function called "multiplyBetween".
Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.
Notes:  The product between 1 and 4 is 1 * 2 * 3 = 6.
If num2 is not greater than num1, it should return 0.
var output = multiplyBetween(2, 5);
console.log(output); // --> 24
Related Topics: Function */

/* function multiplyBetween(num1, num2) {
  if (num2 < num1) return 0;
  let result = 1;
  for (let i = num1; i < num2; i++) {
    result *= i;
  }
  return result;
}
console.log(multiplyBetween(2, 5)); */

////////////////////////////////////////////////////////////////

/* 59.  transformFirstLast
Write a function called "transformFirstLast".
Transform first and last item to an object.
var arr = [1,2,3,4]
// {first: 1, last: 4}
Related Topics: Function, Object, Array */

/* function transformFirstLast(arr) {
  let obj = {};
  obj.first = arr[0];
  obj.last = arr[arr.length - 1];
  return obj;
}
console.log(transformFirstLast([1, 2, 3, 4])); */

////////////////////////////////////////////////////////////////

/* 60.  getAllKeys
Write a function called "getAllKeys".
Return all keys from a given array.
var obj = {a: 1, b: 4}
getAllKeys(obj) // ['a', 'b']
Related Topics: Function, Object, Array */

/* var obj = { a: 1, b: 4 };

// 1st way
function getAllKeys(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}
console.log(getAllKeys(obj)); */

// 2nd way
/* function getAllKeys(obj) {
  return Object.keys(obj);
}
console.log(getAllKeys(obj)); */

////////////////////////////////////////////////////////////////

/* 61.  fromListToObject
Write a function called "fromListToObject".
Convert array to an object as it's shown here.
var arr = [[1,2],['a','b']]
fromListToObject(arr)
// {1:2, a:'b'}
Related Topics: Function, Object */

/* function fromListToObject(arr) {
  let obj = {};
  for (let el of arr) {
    obj[el[0]] = el[1];
  }
  return obj;
}
console.log(
  fromListToObject([
    [1, 2],
    ["a", "b"],
  ])
); */

////////////////////////////////////////////////////////////////

/* 62.  listAllValues
Write a function called "listAllValues".
List all values
var obj = {1:2, a:'b'}
listAllValues(obj) // [2,'b']
Related Topics: Function, Object */

/* var obj = { 1: 2, a: "b" };

// 1st way
function listAllValues(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}
console.log(listAllValues(obj)); */

// 2nd way
/* function listAllValues(obj) {
  return Object.values(obj);
}
console.log(listAllValues(obj)); */

////////////////////////////////////////////////////////////////

/* 63.  transform
Write a function called "transform".
Transform employee data to an array.
var obj = {name:"meet", location:'online'}
transform(obj)
// ["name", "meet", "location", "online"]
Related Topics: Function, Object */

/* var obj = { name: "meet", location: "online" };

const transform = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(key, obj[key]);
  }
  return arr;
};
console.log(transform(obj)); */

////////////////////////////////////////////////////////////////

/* 64.  greetCustomer
Greet customer and return a text.
var obj = {name: "Express", lastName: "Co"}
greetCustomer(obj) // "Welcome Express Co"
Related Topics: Function, Object */

/* var obj = { name: "Express", lastName: "Co" };

function greetCustomer(obj) {
  return `Welcome ${obj.name} ${obj.lastName}`;
}
console.log(greetCustomer(obj)); */

////////////////////////////////////////////////////////////////

/* 65.  convertStr1
Convert url to an object
var url = "www.food.express.co/delivery/menu/cake"
// {0: 'delivery', 1:'menu', 2:'cake'}
Related Topics: Function, Object */

/* function convertStr1(url) {
  let obj = {};
  let arr = url.split("/");
  arr.shift();
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}
console.log(convertStr1("www.food.express.co/delivery/menu/cake"));
console.log(convertStr1("www.depositphotos.co/themes/kids")); */

////////////////////////////////////////////////////////////////

/* 66.  getParams
Convert url to an object
var url = "http//food.express.co/?age=10&loc=seattle&type=cafe"
getParams(url)
// {age: 10, loc:'seattle', type:'cafe'}
Related Topics: Function, Object */

/* function getParams(url) {
  let obj = {};
  let arrPrep = url.split(/[/?&]+/);
  arrPrep.splice(0, 2);
  let arr = [];
  for (let el of arrPrep) {
    arr.push(el.split("="));
  }
  for (let el of arr) {
    obj[el[0]] = el[1];
  }
  return obj;
}
console.log(getParams("http//food.express.co/?age=10&loc=seattle&type=cafe"));
console.log(getParams("http//food.express.co/?test=5&a=b&c=d&e=f")); */

////////////////////////////////////////////////////////////////

/* 67.  getDomain
Convert url to an object
var url = "https//food.express.co"
getDomain(url)
// {type: "https", domain:'express', subDomain:'food'}
Related Topics: Function, Object */

/* function getDomain(url) {
  let obj = {};
  let arr = url.split(/[/.]+/);
  obj.type = arr[0];
  obj.domain = arr[2];
  obj.subDomain = arr[1];
  return obj;
}
console.log(getDomain("https//food.express.co")); */
