/* 1.  removePrefix
Clear all '$' signs from numbers in a given array. => [2,3,4,5,15]
`removePrefix(['$2', '$3', '$4', '$5','$15']) // [2,3,4,5,15]`
Related Topics: Function */

// 1st way - outcome numbers String
/* function removePrefix(arrInfo) {
  let arr = arrInfo.join("").split("$");
  arr.shift();
  return arr;
}
console.log(removePrefix(["$2", "$3", "$4", "$5", "$15"])); */

// 2nd way - outcome numbers String
/* function removePrefix(arrInfo) {
  let arr = arrInfo.toString().split(/[,$]+/);
  arr.shift();
  return arr;
}
console.log(removePrefix(["$2", "$3", "$4", "$5", "$15"])); */

// 3rd way - outcome numbers Number
/* function removePrefix(arrInfo) {
  let arr = arrInfo.join("").split("$");
  arr.shift();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}
console.log(removePrefix(["$2", "$3", "$4", "$5", "$15"])); */

////////////////////////////////////////////////////////////////

/* 2.  getFreq
Find frequency of 'a' in a given text.
`getFreq('alibaba', 'a') // 3`
Related Topics: Function */

// 1st way
/* function getFreq(str, target) {
  let freq = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      freq += 1;
    }
  }
  return freq;
}
console.log(getFreq("alibaba", "a")); */

// 2nd way
/* function getFreq(str, target) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (!freq[str[i]]) {
      freq[str[i]] = 1;
    } else {
      freq[str[i]] += 1;
    }
  }
  return freq[target];
}
console.log(getFreq("alibaba", "a")); */

////////////////////////////////////////////////////////////////

/* 3.  getFreqAll
Find frequencies of all letters in a given text.
`getFreqAll('alibaba') // {a:3, l:1, i:1, b:2}`
Related Topics: Function */

/* function getFreqAll(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (!freq[str[i]]) {
      freq[str[i]] = 1;
    } else {
      freq[str[i]] += 1;
    }
  }
  return freq;
}
console.log(getFreqAll("alibaba")); */

////////////////////////////////////////////////////////////////

/* 4.  removeDup
Removing duplicates of an array and returning an array of only unique elements
`removeDup([1,2,3,1,1,1,2]) // [1,2,3]`
Related Topics: Function */

// 1st way
/* function removeDup(arr) {
  let output = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(removeDup([1, 2, 3, 1, 1, 1, 2]));
console.log(removeDup(["a", "b", "a", "b"])); */

// 2nd way
/* function removeDup(arr) {
  let result = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result[result.length - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDup([1, 2, 3, 1, 1, 1, 2]));
console.log(removeDup(["a", "b", "a", "b"])); */

// 3rd way
/* function removeDup(arr) {
  let result = new Set(arr);
  return result;
}
console.log(removeDup([1, 2, 3, 1, 1, 1, 2]));
console.log(removeDup(["a", "b", "a", "b"])); */

////////////////////////////////////////////////////////////////

/* 5.  largestDiff
Given an array of integers, find the largest difference between two elements
`largestDiff([2,3,8,1]) // 7`
Related Topics: Function */

// 1st way
/* function largestDiff(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let diff = max - min;
  return diff;
}
console.log(largestDiff([2, 3, 8, 1]));
console.log(largestDiff([20, 10, 2, 1])); */

// 2nd way
/* function largestDiff(arr) {
  let arrSort = arr.sort((a, b) => a - b);
  let result = arrSort[arrSort.length - 1] - arrSort[0];
  return result;
}
console.log(largestDiff([2, 3, 8, 1]));
console.log(largestDiff([20, 10, 2, 1])); */

// 3rd way
/* function largestDiff(arr) {
  let smallNum = arr[0];
  let bigNum = arr[0];
  for (let el of arr) {
    if (smallNum > el) {
      smallNum = el;
    } else if (bigNum < el) {
      bigNum = el;
    }
  }
  const result = bigNum - smallNum;
  return result;
}
console.log(largestDiff([2, 3, 8, 1]));
console.log(largestDiff([20, 10, 2, 1])); */

////////////////////////////////////////////////////////////////

/* 6.  capitalize
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
`capitalize('the quick brown fox') // The Quick Brown Fox`
Related Topics: Function */

/* const capitalize = (str) => {
  let output = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    output += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
  }
  return output;
};
console.log(capitalize("the quick brown fox")); */

////////////////////////////////////////////////////////////////

/* 7.  reverseStr
Create a function which reverses a given string.
`reverseStr("hello me") // "em olleh"`
Related Topics: Function */

// 1st way
/* const reverseStr = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
console.log(reverseStr("hello me")); */

// 2nd way
/* const reverseStr = (str) => {
  let result = "";
  let i = str.length - 1;
  while (i >= 0) {
    result += str[i];
    i--;
  }
  return result;
};
console.log(reverseStr("hello me")); */

// 3rd way
/* const reverseStr = (str) => {
  const arr = str.match(/[a-z]/gi);
  const reversed = arr.reverse();
  return reversed.join("");
};
console.log(reverseStr("hello me")); */

////////////////////////////////////////////////////////////////

/* 8.  reverseWords
Create a function to reverse all words in a given string.
`reverseWords("my name is Fluffy") // "ym eman si taraM"`
Related Topics: Function */

// 1st way - time complexity O(n^2)
/* const reverseWords = (str) => {
  let result = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    result += " ";
    for (let j = arr[i].length - 1; j >= 0; j--) {
      result += arr[i][j];
    }
  }
  return result;
};
console.log(reverseWords("my name is Fluffy")); */

// 2nd way - time complexity O(n)
/* const reverseWords = (strs) => {
  let result = "";
  let strRev = "";
  let str = strs.split(" ");
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += ` ${str[i]}`;
  }
  for (let i = strRev.length - 1; i >= 0; i--) {
    result += strRev[i];
  }
  return result;
};
console.log(reverseWords("my name is Fluffy")); */

// 3rd way
/* const reverseWords = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("");
    arr[i] = arr[i].reverse();
    arr[i] = arr[i].join("");
  }
  return arr.join(" ");
};
console.log(reverseWords("my name is Fluffy")); */

////////////////////////////////////////////////////////////////

/* 9.  secondLowest
Write a JavaScript function which will take an array of numbers stored and find the second lowest
`secondLowest([2,3,8,0]) // 2`
Related Topics: Function */

/* const secondLowest = (arr) => {
  let arrSort = arr.sort((a, b) => a - b);
  return arrSort[1];
};
console.log(secondLowest([2, 3, 8, 0])); */

////////////////////////////////////////////////////////////////

/* 10.  count
Accept a string and return the number of non-space characters found in the string
`count("Honey pie, you are driving me crazy") // 29 (not 35)`
Related Topics: Function */

// 1st way
/* const count = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") counter++;
  }
  return counter;
};
console.log(count("Honey pie, you are driving me crazy")); */

// 2nd way
/* const count = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z,]/gi)) counter++;
  }
  return counter;
};
console.log(count("Honey pie, you are driving me crazy")); */

// 3rd way
/* const count = (str) => {
  let result = str.split(" ").join("");
  return result.length;
};
console.log(count("Honey pie, you are driving me crazy")); */

////////////////////////////////////////////////////////////////

/* 11.  remove
Remove Shorter Strings
Given an array of strings and length len, find and remove any strings that are shorter than given length len from the array.
remove(["geeks", "for", "geeks"], 3) // ["geeks", "geeks"]
remove(["hello", "react", "javascript", "ruby"], 6) // ["javascript"]
Related Topics: Function */

// 1st way - same array
/* const remove = (arr, len) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length <= len) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
console.log(remove(["geeks", "for", "geeks"], 3));
console.log(remove(["hello", "react", "javascript", "ruby"], 6)); */

// 2nd way - same array
/* const remove = (arr, len) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= len) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
console.log(remove(["geeks", "for", "geeks"], 3));
console.log(remove(["hello", "react", "javascript", "ruby"], 6)); */

// 3rd way - new array
/* const remove = (arr, len) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(remove(["geeks", "for", "geeks"], 3));
console.log(remove(["hello", "react", "javascript", "ruby"], 6)); */

// 4th way
/* const remove = (arr, len) => {
  return arr.filter((el) => el.length > len);
};
console.log(remove(["geeks", "for", "geeks"], 3));
console.log(remove(["hello", "react", "javascript", "ruby"], 6)); */

////////////////////////////////////////////////////////////////

/* 12.  range
Write a JavaScript program to get the integers in range
`range(2, 9) // [3, 4, 5, 6, 7, 8]`
Related Topics: Function */

/* const range = (num1, num2) => {
  let output = [];
  if (num1 >= 0 && num2 >= 0) {
    let num = num1 + 1;
    while (num < num2) {
      output.push(num);
      num++;
    }
  } else if (num1 < 0 && num2 < 0) {
    let num = num1 - 1;
    while (num > num2) {
      output.push(num);
      num--;
    }
  }
  return output;
};
console.log(range(2, 9));
console.log(range(-10, -15)); */

////////////////////////////////////////////////////////////////

/* 13.  myChoice
We have the following array:
const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"].
Write a JavaScript program to display the colors in the following way :
`"1st choice is Blue."
"2nd choice is Green."
"3rd choice is Red."
...`
Related Topics: Function */

/* const myChoice = (arr) => {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    switch (true) {
      case i + 1 === 1:
        output += `${i + 1}st choice is ${arr[i]}. `;
        break;
      case i + 1 === 2:
        output += `${i + 1}nd choice is ${arr[i]}. `;
        break;
      case i + 1 === 3:
        output += `${i + 1}rd choice is ${arr[i]}. `;
        break;
      default:
        output += `${i + 1}th choice is ${arr[i]}. `;
    }
  }
  return output.trim();
};
console.log(
  myChoice(["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"])
); */

////////////////////////////////////////////////////////////////

/* 14.  search_word
Write a JavaScript function to find a word within a string.
`search_word('The quick brown fox', 'fox') // => "'fox' was found 1 times."
search_word('aa, bb, cc, dd, aa', 'aa'); // -> "'aa' was found 2 times."`
Related Topics: Function */

/* const search_word = (str, word) => {
  let counter = 0;
  let arrStr = str.split(/[" ",]+/);
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === word) {
      counter++;
    }
  }
  return `'${word}' was found ${counter} times`;
};
console.log(search_word("The quick brown fox", "fox"));
console.log(search_word("aa, bb, cc, dd, aa", "aa")); */

////////////////////////////////////////////////////////////////

/* 15.  parameterize
Write a JavaScript function to parameterize a string.
`parameterize('Fluffy Whisker from Seattle') // => fluffy-whisker-from-seattle`
Related Topics: Function */

// 1st way
/* const parameterize = (str) => {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      output += "-";
    } else {
      output += str[i].toLowerCase();
    }
  }
  return output;
};
console.log(parameterize("Fluffy Whisker from Seattle")); */

// 2nd way
/* const parameterize = (str) => {
  return str.replaceAll(" ", "-").toLowerCase();
};
console.log(parameterize("Fluffy Whisker from Seattle")); */

// 3rd way
/* const parameterize = (str) => {
  let result = str.toLowerCase().split(" ").join("-");
  return result;
};
console.log(parameterize("Fluffy Whisker from Seattle")); */

////////////////////////////////////////////////////////////////

/* 16.  swapCase
Write a function to swap cases.
`swapCase('AaBbc'); // -> "aAbBC"`
Related Topics: Function */

// 1st way - string
/* const swapCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase()
      ? (result += str[i].toLowerCase())
      : (result += str[i].toUpperCase());
  }
  return result;
};
console.log(swapCase("AaBbc")); */

// 2nd way - array
/* const swapCase = (str) => {
  let arr = str.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] === arr[i].toUpperCase()
      ? (arr[i] = arr[i].toLowerCase())
      : (arr[i] = arr[i].toUpperCase());
  }
  return arr.join("");
};
console.log(swapCase("AaBbc")); */

////////////////////////////////////////////////////////////////

/* 17.  repeat
Write a JavaScript function to repeat a string a specified times.
`repeat('a', 4) // 'aaaa'`
Related Topics: Function */

/* const repeat = (char, num) => {
  let result = "";
  let i = 1;
  while (i <= num) {
    result += char;
    i++;
  }
  return result;
};
console.log(repeat("a", 4)); */

////////////////////////////////////////////////////////////////

/* 18.  remove_first_occurrence
Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
`remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')
// "The quick brown fox jumps over lazy dog"`
Related Topics: Function */

/* const remove_first_occurrence = (str, word) => {
  let arr = str.split(" ");
  if (arr[0].toLowerCase() === word) {
    arr.splice(0, 1);
    return arr.join(" ");
  } else {
    return str.replace(word, "");
  }
};
console.log(
  remove_first_occurrence("The quick brown fox jumps over the lazy dog", "the")
);
console.log(
  remove_first_occurrence("We are doing some exercises, they are easy", "are")
); */

////////////////////////////////////////////////////////////////

/* 19.  sumToOne
Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit. Return that one-digit result.
`sumToOne(928) // 1 => 9+2+8=19 then 1+9=10, 1+0=1`
Related Topics: Function */

// 1st way - recursion
/* function sumToOne(num) {
  if (num < 10) return num;
  let arr = String(num).split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sumToOne(sum);
}
console.log(sumToOne(928));
console.log(sumToOne(185)); */

// 2nd way
/* function sumToOne(num) {
  let tempNum = num;
  while (tempNum > 9) {
    let sum = 0;
    let arr = tempNum.toString().split("");
    for (let i = 0; i < arr.length; i++) {
      sum += +arr[i];
    }
    tempNum = sum;
  }
  return tempNum;
}
console.log(sumToOne(928));
console.log(sumToOne(185)); */

////////////////////////////////////////////////////////////////

/* 20.  pushFront
Array: Push Front
Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
pushFront([1,2,3], 7) // [7,1,2,3]
Related Topics: Function, Array */

// 1st way
/* const pushFront = (arr, value) => {
  return [value, ...arr];
};
console.log(pushFront([1, 2, 3], 7)); */

// 2nd way
/* const pushFront = (arr, value) => {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr;
};
console.log(pushFront([1, 2, 3], 7)); */
