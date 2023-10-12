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
