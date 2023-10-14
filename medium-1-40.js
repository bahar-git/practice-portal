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
