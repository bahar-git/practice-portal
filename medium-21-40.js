/* 21.  popFront
Array: Pop Front
Given array, remove and return the value at the beginning of the array.
Note:  Do this without using built-in array methods except pop().
`popFront([1,2,3]) // 1`
Related Topics: Function, Array */

// 1st way
/* const popFront = (arr) => {
  let arrNum = arr[0];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrNum = [arr[i]];
  }
  return arrNum.pop();
};
console.log(popFront([1, 2, 3])); */

// 2nd way
/* const popFront = (arr) => {
    return arr[0];
  };
  console.log(popFront([1, 2, 3])); */

////////////////////////////////////////////////////////////////

/* 22.  removeDup
Array: Remove Duplicates
Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
Notes:  As with all these array challenges, do this without using any built-in array methods.
Solve this without using any nested loops.
`removeDup([1,2,2,2,3,4,4]) // [1,2,3,4]`
Related Topics: Function, Array */

// 1st way - without built-in array methods
/* function removeDup(arr) {
  let obj = {};
  for (let el of arr) {
    if (!obj[el]) {
      obj[el] = el;
    }
  }
  return Object.values(obj);
}
console.log(removeDup([1, 2, 2, 2, 3, 4, 4])); */

// 2nd way - with a built-in array method
/* function removeDup(arr) {
  let result = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result[result.length - 1]) result.push(arr[i]);
  }
  return result;
}
console.log(removeDup([1, 2, 2, 2, 3, 4, 4])); */

////////////////////////////////////////////////////////////////

/* 23.  reverse
Array: Reverse
Given a numerical array, reverse the order of values, in place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array - move values within the array that you are given. As always. do not use built-in array functions such as splice().
`reverse([1,2,3,4]) // [4,3,2,1]`
Related Topics: Function, Array */

// 1st way - without built-in array methods
/* function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(reverse([1, 2, 3, 4])); */

// 2nd way - with a built-in array method
/* function reverse(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverse([1, 2, 3, 4])); */

////////////////////////////////////////////////////////////////

/* 24.  filterRange
Array: Filter Range
Given array and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order.
Note:  No built-in array functions.
`filterRange([2,6,12,4,7,13,42,1], 3, 9) // [6, 4, 7]`
Related Topics: Function, Array */

// 1st way - without built-in array methods
/* function filterRange(arr, min, max) {
  let tempArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && arr[i] < max) {
      tempArr[index] = arr[i];
      index++;
    }
  }
  arr = tempArr;
  return arr;
}
console.log(filterRange([2, 6, 12, 4, 7, 13, 42, 1], 3, 9)); */

// 2nd way - with a built-in array method
/* function filterRange(arr, min, max) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= min || arr[i] >= max) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(filterRange([2, 6, 12, 4, 7, 13, 42, 1], 3, 9)); */

// 3rd way - with a built-in array method
/* function filterRange(arr, min, max) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && arr[i] < max) result.push(arr[i]);
  }
  return result;
}
console.log(filterRange([2, 6, 12, 4, 7, 13, 42, 1], 3, 9)); */

////////////////////////////////////////////////////////////////

/* 25.  arrConcat
Array: Concat
Replicate JavaScript's concat() built-in method . Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays.
`arrConcat(['a', 'b'],[1, 2]) // ['a','b',1,2].`
Related Topics: Function, Array */

/* function arrConcat(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    result[i + arr1.length] = arr2[i];
  }
  return result;
}
console.log(arrConcat(["a", "b"], [1, 2])); */

////////////////////////////////////////////////////////////////

/* 26.  removeDupChars
Write a function called "removeDupChars".
Given a string, return a string that every single character is unique in the output string.
removeDupChars("sleep") // "slep"
removeDupChars("characters") // "chartes" 
Related Topics: Function */

// 1st way
/* function removeDupChars(str) {
  let obj = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
      result += str[i];
    }
  }
  return result;
}
console.log(removeDupChars("sleep"));
console.log(removeDupChars("characters")); */

// 2nd way
/* function removeDupChars(str) {
  let output = [...new Set(str)];
  return output.join("");
}
console.log(removeDupChars("sleep"));
console.log(removeDupChars("characters")); */

////////////////////////////////////////////////////////////////

/* 27.  firstNonRepeatedCharacter
Find the first non repeating char in a string?
firstNonRepeatedCharacter('aabcbd')
output: c
Related Topics: Function */

/* function firstNonRepeatedCharacter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) return key;
  }
}
console.log(firstNonRepeatedCharacter("aabcbd")); */

////////////////////////////////////////////////////////////////

/* 28.  removeNegatives
Array: Remove Negatives
Implements removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use build-in array functions.
`removeNegatives([-1,2,-4,5]) // [2,5]`
Related Topics: Function, Array */

// 1st way - with a built-in array method
/* function removeNegatives(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) arr.splice(i, 1);
  }
  return arr;
}
console.log(removeNegatives([-1, 2, -4, 5])); */

// 2nd way - without built-in array methods
/* function removeNegatives(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < 0) {
      for (let j = i; j < arr.length - 1; j++) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      arr.pop();
      i = 0;
    }
  }
  return arr;
}
console.log(removeNegatives([-1, 2, -4, 5])); */

////////////////////////////////////////////////////////////////

/* 29.  secondLarge
Array: Second-Largest
Return the second-largest element of an array.
`secondLarge([42,1,4,3,7]) // 7
If array is too short, return null.`
Related Topics: Function, Array */

// 1st way
/* function secondLarge() {
  if (arguments[0].length < 2) return null;
  return arguments[0].sort((a, b) => a - b)[arguments[0].length - 2];
}
console.log(secondLarge([42, 1, 4, 3, 7]));
console.log(secondLarge([-1, 2, -4, 5])); */

// 2nd way
/* function secondLarge() {
  if (arguments[0].length < 2) return null;
  const arr = arguments[0].sort((a, b) => a - b);
  return arr[arr.length - 2];
}
console.log(secondLarge([42, 1, 4, 3, 7]));
console.log(secondLarge([-1, 2, -4, 5])); */

// 3rd way
/* function secondLarge() {
  if (arguments[0].length < 2) return null;
  let result = arguments[0].sort((a, b) => b - a);
  return result[1];
}
console.log(secondLarge([42, 1, 4, 3, 7]));
console.log(secondLarge([-1, 2, -4, 5])); */

////////////////////////////////////////////////////////////////

/* 30.  duplicate
Create a function that changes a given array to list each original element twice, retaining original order.
`duplicate([1,2,3]) // [1,1,2,2,3,3]`
Related Topics: Function, Array */

/* function duplicate(arr) {
  for (let i = 0; i < arr.length; i = i + 2) {
    arr.splice(i, 0, arr[i]);
  }
  return arr;
}
console.log(duplicate([1, 2, 3]));
console.log(duplicate([-1, 2, -4, 5])); */

////////////////////////////////////////////////////////////////

/* 31.  zip
Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward.
`zip( [1,2], [10,20,30,40] ) // [1,10,2,20,30,40]`
Related Topics: Function, Array */

// 1st way
/* function zip(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr1[i]);
    arr.push(arr2[i]);
  }
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(zip([1, 2], [10, 20, 30, 40])); */

// 2nd way
/* function zip(arr1, arr2) {
  let arr = [];
  let arrLength = arr1.length + arr2.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr1.length !== 0) {
      arr[i] = arr1.shift();
      i++;
    }
    if (arr2.length !== 0) {
      arr[i] = arr2.shift();
    }
  }
  return arr;
}
console.log(zip([1, 2], [10, 20, 30, 40])); */

////////////////////////////////////////////////////////////////

/* 32.  remove
Create a function that, given a string, returns all of that string's contents, but without blanks.
`remove("Pl     ayTha    tF    u    nkyM     usi   c    ")`
`// PlayThatFunkyMusic`
Related Topics: Function */

// 1st way
/* function remove(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      output += str[i];
    }
  }
  return output;
}
console.log(remove("Pl     ayTha    tF    u    nkyM     usi   c    ")); */

// 2nd way
/* function remove(str) {
  return str.replaceAll(" ", "");
}
console.log(remove("Pl     ayTha    tF    u    nkyM     usi   c    ")); */

// 3rd way
/* function remove(str) {
  return str
    .split(/[" "]+/)
    .join("")
    .trimEnd();
}
console.log(remove("Pl     ayTha    tF    u    nkyM     usi   c    ")); */

// 4th way
/* function remove(str) {
  return str.match(/[a-z]/gi).join("");
}
console.log(remove("Pl     ayTha    tF    u    nkyM     usi   c    ")); */

////////////////////////////////////////////////////////////////

/* 33.  getDigits
Create a JavaScript function that given a string, returns the integer made from the string's digits.
`getDigits("0s1a3y5w7h9a2t4?6!8?0") // 1357924680`
Related Topics: Function */

// 1st way - output number
/* function getDigits(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0) result += str[i];
  }
  return Number(result);
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); */

// 2nd way - output number
/* function getDigits(str) {
  let arr = str.match(/[0-9]/gi).join("");
  return +arr;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); */

// 3rd way - output string
/* function getDigits(str) {
  let arr = str.match(/[0-9]/gi);
  if (arr[0] == 0) {
    return arr.splice(1).join("");
  } else {
    return arr.join("");
  }
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); */

////////////////////////////////////////////////////////////////

/* 34.  acronym
Create a function that, given a string, returns the string's acronym (first letters only, capitalized).
`acronym("there's no free lunch - gotta pay yer way.") // "TNFL-GPYW"
acronym("Live from New York, it's Saturday Night!") // "LFNYISN"`
Related Topics: Function */

/* function acronym(str) {
  let result = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0];
  }
  return result.toUpperCase();
}
console.log(acronym("there's no free lunch - gotta pay yer way."));
console.log(acronym("Live from New York, it's Saturday Night!")); */

////////////////////////////////////////////////////////////////

/* 35.  sorted
Given a string, return true whether all contained letters are in alphabetical order.
`sorted("agvd")`
Related Topics: Function */

/* function sorted(str) {
  let output = false;
  let temp = str.split("").sort().join("");
  if (temp === str) return (output = true);
  return output;
}
console.log(sorted("agvd"));
console.log(sorted("abc")); */

////////////////////////////////////////////////////////////////

/* 36.  commonSuf
Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array
`commonSuf(["deforestation", "citation", "conviction", "incarceration"]) // "tion"
commonSuf(["nice", "ice", "baby"]) // ""`
Related Topics: Function, Array */

/* function commonSuf(...args) {
  let arr = args.flat();
  let maxSuf = "";
  let lastIndex = -1;
  let stillChecking = true;
  while (stillChecking) {
    const letterToCheck = arr[0][arr[0].length + lastIndex];
    const allHaveTheSameSuf = arr.every(
      (str) => str[str.length + lastIndex] === letterToCheck
    );
    if (allHaveTheSameSuf) {
      maxSuf = letterToCheck + maxSuf;
      lastIndex -= 1;
    } else {
      stillChecking = false;
    }
  }
  return maxSuf;
}
console.log(
  commonSuf(["deforestation", "citation", "conviction", "incarceration"])
);
console.log(commonSuf(["nice", "ice", "baby"])); */

////////////////////////////////////////////////////////////////

/* 37.  bookIndex
Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges separated by a hyphen.
`bookIndex([1,13,14,15,37,38,70]) // "1, 13-15, 37-38, 70"`
Related Topics: Function, Array */

// 1st way
/* function bookIndex(arr) {
  let result = [],
    startNum,
    num;
  for (let i = 0; i < arr.length; i++) {
    startNum = arr[i];
    num = startNum;
    while (arr[i + 1] - arr[i] === 1) {
      num = arr[i + 1];
      i++;
    }
    result.push(startNum === num ? startNum : `${startNum}-${num}`);
  }
  return result.join(", ");
}
console.log(bookIndex([1, 13, 14, 15, 37, 38, 70])); */

// 2nd way
/* function bookIndex(arr) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i + 1]);
    // console.log(arr[i] + 1);
    if (arr[i] + 1 !== arr[i + 1]) {
      if (count > 0) {
        result.push(arr[i - count] + "-" + arr[i]);
        count = 0;
      } else result.push(arr[i]);
    } else count++;
  }
  return result.join(", ");
}
console.log(bookIndex([1, 13, 14, 15, 37, 38, 70])); */

////////////////////////////////////////////////////////////////

/* 38.  getTypes
Given an array of any data types. Return object of each data types and how many.
`getTypes([1,2,{},[],null])
// return
{
    number: 2,
    object: 1,
    array: 1,
    null: 1
}`
Related Topics: Function, Object, Array */

// 1st way - used for...of loop
/* function getTypes(array) {
  let obj = {};
  for (let el of array) {
    if (obj.hasOwnProperty("array") && Array.isArray(el)) {
      obj["array"] += 1;
    } else if (obj.hasOwnProperty("null") && el === null) {
      obj["null"] += 1;
    } else if (
      obj.hasOwnProperty(typeof el) &&
      !Array.isArray(el) &&
      el !== null
    ) {
      obj[typeof el] += 1;
    } else if (Array.isArray(el)) {
      obj["array"] = 1;
    } else if (el === null) {
      obj["null"] = 1;
    } else if (!Array.isArray(el) && el !== null) {
      obj[typeof el] = 1;
    }
  }
  return obj;
}
console.log(getTypes([1, 2, {}, [], null]));
console.log(getTypes([1, 13, true, false])); */

// 2nd way - used for loop
/* function getTypes(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty("array") && Array.isArray(arr[i])) {
      obj["array"] += 1;
    } else if (obj.hasOwnProperty("null") && arr[i] === null) {
      obj["null"] += 1;
    } else if (
      obj.hasOwnProperty(typeof arr[i]) &&
      !Array.isArray(arr[i]) &&
      arr[i] !== null
    ) {
      obj[typeof arr[i]] += 1;
    } else if (Array.isArray(arr[i])) {
      obj["array"] = 1;
    } else if (arr[i] === null) {
      obj["null"] = 1;
    } else if (!Array.isArray(arr[i]) && arr[i] !== null) {
      obj[typeof arr[i]] = 1;
    }
  }
  return obj;
}
console.log(getTypes([1, {}, {}, null, [], 13, 1, 2, {}, [], null]));
console.log(getTypes([1, 13, true, false])); */

////////////////////////////////////////////////////////////////

/* 39.  isMissing
Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
isMissing([1,2,3,5,6]) // 4
isMissing([1,3,7,9,11]) // 5
isMissing([1,2,3,4,5]) // no missing
Related Topics: Function, Array */

// 1st way
/* function isMissing(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an Array");
  if (arr.length === 0) return [];
  let missingOdd = "no missing";
  const everyOdd = arr.every((el) => el % 2 !== 0);
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let next = arr[i + 1];
    if (everyOdd) {
      if (next - num > 2) {
        missingOdd = num + 2;
        break;
      }
    } else if (next - num > 1) {
      missingOdd = num + 1;
      break;
    }
  }
  return missingOdd;
}
console.log(isMissing([1, 2, 3, 5, 6]));
console.log(isMissing([1, 3, 7, 9, 11]));
console.log(isMissing([1, 2, 3, 4, 5])); */

// 2nd way
/* function isMissing(arr) {
  let obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    if (obj[arr[i + 1] - arr[i]] > 0) {
      obj[arr[i + 1] - arr[i]]++;
    } else obj[arr[i + 1] - arr[i]] = 1;
  }
  let result = Object.keys(obj).find((key) => obj[key] > 1);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != Number(result)) {
      return arr[i] + parseInt(result);
    }
  }
  return "no missing";
}
console.log(isMissing([1, 2, 3, 5, 6]));
console.log(isMissing([1, 3, 7, 9, 11]));
console.log(isMissing([1, 2, 3, 4, 5])); */

////////////////////////////////////////////////////////////////

/* 40.  findVowels
Find how many vowels are in a given text.
`findVowels('hello') // --> 2
findVowels('why') // --> 0`
Related Topics: Function */

// 1st way
/* function findVowels(str) {
  let counter = 0;
  let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let i = 0;
  while (i < str.length) {
    if (obj.hasOwnProperty(str[i].toLowerCase())) {
      obj[str[i].toLowerCase()] += 1;
      counter++;
    }
    i++;
  }
  return counter;
}
console.log(findVowels("hello"));
console.log(findVowels("why")); */

// 2nd way
/* function findVowels(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    str[i].match(/[aeiou]/gi) ? counter++ : counter;
  }
  return counter;
}
console.log(findVowels("hello"));
console.log(findVowels("why")); */

// 3rd way
/* function findVowels(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "o", "u"].indexOf(str.charAt(i).toLowerCase()) >= 0) {
      counter++;
    }
  }
  return counter;
}
console.log(findVowels("hello"));
console.log(findVowels("why")); */
