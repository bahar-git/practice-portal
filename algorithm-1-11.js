/* 1.  checkFrequency
Write a function called checkFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
checkFrequency(182, 281) //true
checkFrequency(22, 222) //false
Constraints:  Runtime - O(N), where N is the length of numbers.
Related Topics: Frequency counter */

// 1st way - TC-O(n)
/* function checkFrequency(firstNumber, secondNumber) {
  let str1 = String(firstNumber);
  let str2 = String(secondNumber);
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) {
      obj[str2[i]] += 1;
    }
  }
  const isEveryTrue = Object.values(obj).every((item) => item % 2 === 0);
  return isEveryTrue;
}
console.log(checkFrequency(182, 281));
console.log(checkFrequency(22, 222));
console.log(checkFrequency("34", "14"));
console.log(checkFrequency(1255899, 8991552));
console.log(checkFrequency("1255899", "89915527")); */

// 2nd way - TC-O(n)
/* function checkFrequency(firstNumber, secondNumber) {
  const str1 = String(firstNumber);
  const str2 = String(secondNumber);
  if (str1.length !== str2.length) return false;
  const obj1 = freqCount(str1);
  const obj2 = freqCount(str2);
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

function freqCount(str) {
  return [...str].reduce((accum, currVal) => {
    accum[currVal] = (accum[currVal] || 0) + 1;
    return accum;
  }, {});
}
console.log(checkFrequency(182, 281));
console.log(checkFrequency(22, 222));
console.log(checkFrequency("34", "14"));
console.log(checkFrequency(1255899, 8991552));
console.log(checkFrequency("1255899", "89915527")); */

// 3rd way - TC-O(nlogn)
/* function checkFrequency(firstNumber, secondNumber) {
  const str1 = String(firstNumber);
  const str2 = String(secondNumber);
  return [...str1].sort().join("") === [...str2].sort().join("");
}
console.log(checkFrequency(182, 281));
console.log(checkFrequency(22, 222));
console.log(checkFrequency("34", "14"));
console.log(checkFrequency(1255899, 8991552));
console.log(checkFrequency("1255899", "89915527")); */

// 4th way - TC-O(nlogn)
/* function checkFrequency(firstNumber, secondNumber) {
  const str1 = String(firstNumber);
  const str2 = String(secondNumber);
  return sorting(str1) === sorting(str2);
}

function sorting(str) {
  return [...str].sort().join("");
}
console.log(checkFrequency(182, 281));
console.log(checkFrequency(22, 222));
console.log(checkFrequency("34", "14"));
console.log(checkFrequency(1255899, 8991552));
console.log(checkFrequency("1255899", "89915527")); */

////////////////////////////////////////////////////////////////

/* 2.  isPermStr
Given two strings, write a function which uses object properties as a key-value store to determine if the second string is a permutation of the first, regardless of case.
isPermStr('ABC', 'cba') //true
isPermStr('ABC', 'cbaa') //false
isPermStr('ratt', 'Tatr') //true
Related Topics: Frequency counter */

/* function isPermStr(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i].toLowerCase()]) {
      obj[str1[i].toLowerCase()] = 1;
    } else {
      obj[str1[i].toLowerCase()] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i].toLowerCase()]) {
      obj[str2[i].toLowerCase()] += 1;
    }
  }
  const isEveryTrue = Object.values(obj).every((item) => item % 2 === 0);
  return isEveryTrue;
}
console.log(isPermStr("ABC", "cba"));
console.log(isPermStr("ABC", "cbaa"));
console.log(isPermStr("ratt", "Tatr")); */

////////////////////////////////////////////////////////////////

/* 3.  isPalindromePermutation
Given a string, write a function to check if it's a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
Constraints: string contains only letters from A to z and is not empty.
Use object properties as a key-value pairs. Ex:
isPalindromePermutation('Tact Coa') //true, permutations are 'taco cat', 'atco cta, 'tac ocat', etc
Related Topics: Frequency counter */

// 1st way
/* function isPalindromePermutation(str) {
  if (str.length === 0) return false;
  let countOdds = 0;
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) countOdds++;
    if (countOdds > 1) return false;
  }
  return true;
}
console.log(isPalindromePermutation("Tact Coa"));
console.log(isPalindromePermutation("Hannah"));
console.log(isPalindromePermutation("Hanah"));
console.log(isPalindromePermutation("Hanya")); */

// 2nd way
/* function isPalindromePermutation(str) {
  if (str.length === 0) return false;
  const counter = counterLeters(str);
  let oddCount = 0;
  for (let key in counter) {
    if (counter[key] % 2 !== 0) oddCount += 1;
    if (oddCount > 1) return false;
  }
  return true;
}
function counterLeters(str) {
  str = str.toLowerCase();
  const freq = {};
  for (let val of str) {
    if (val !== " ") {
      freq[val] = (freq[val] || 0) + 1;
    }
  }
  return freq;
}
console.log(isPalindromePermutation("Tact Coa"));
console.log(isPalindromePermutation("Hannah"));
console.log(isPalindromePermutation("Hanah"));
console.log(isPalindromePermutation("Hanya")); */

////////////////////////////////////////////////////////////////

/* 4.  checkDuplicates
Implement a function which accepts arguments, and checks whether there are any duplicates among the arguments passed in.
Constraints: Use multiple pointers. Runtime: O(n log n) Space: O(n)
checkDuplicates(1, 2, 3) // false
checkDuplicates(1, 2, 2) // true
checkDuplicates('a', 'b', 'c', 'a') // true
Related Topics: Multiple pointers */

// 1st way - TC-O(n)
/* function checkDuplicates(...args) {
  let obj = {};
  for (let el of args) {
    if (obj[el]) return true;
    else obj[el] = 1;
  }
  return false;
}
console.log(checkDuplicates(1, 2, 3));
console.log(checkDuplicates(1, 2, 2));
console.log(checkDuplicates("a", "b", "c", "a"));
console.log(checkDuplicates("a", "b", "c", "d"));
console.log(checkDuplicates("a", "e", "b", "e", "c", "d")); */

// 2nd way - TC-O(n)
/* function checkDuplicates(...args) {
  for (let i = 0; i < args.length; i++) {
    const numberTosearch = args[i];
    const indexInitial = args.indexOf(numberTosearch);
    const indexLast = args.lastIndexOf(numberTosearch);
    if (indexInitial !== indexLast) return true;
  }
  return false;
}
console.log(checkDuplicates(1, 2, 3));
console.log(checkDuplicates(1, 2, 2));
console.log(checkDuplicates("a", "b", "c", "a"));
console.log(checkDuplicates("a", "b", "c", "d"));
console.log(checkDuplicates("a", "e", "b", "e", "c", "d")); */

// 3rd way - TC-O(n)
/* function checkDuplicates(...args) {
  const notRepeated = new Set();
  for (let el of args) {
    if (notRepeated.has(el)) return true;
    else notRepeated.add(el);
  }
  return false;
}
console.log(checkDuplicates(1, 2, 3));
console.log(checkDuplicates(1, 2, 2));
console.log(checkDuplicates("a", "b", "c", "a"));
console.log(checkDuplicates("a", "b", "c", "d"));
console.log(checkDuplicates("a", "e", "b", "e", "c", "d")); */

// 4th way
/* function checkDuplicates(...args) {
  const notRepeated = new Set(args);
  return notRepeated.size !== args.length;
}
console.log(checkDuplicates(1, 2, 3));
console.log(checkDuplicates(1, 2, 2));
console.log(checkDuplicates("a", "b", "c", "a"));
console.log(checkDuplicates("a", "b", "c", "d"));
console.log(checkDuplicates("a", "e", "b", "e", "c", "d")); */

////////////////////////////////////////////////////////////////

/* 5.  avgPair
Given sorted array of integers and target average. Determine if there is a pair of values in the array where the average is equal to a target average.
avgPair([1, 2, 3], 2.5) //true
Related Topics: Multiple pointers */

/* function avgPair(arr, target) {
  const hashTable = {};
  const sum = target + target; // or target * 2
  for (let el of arr) {
    const num = sum - el;
    if (hashTable[num]) return true;
    else hashTable[el] = el;
  }
  return false;
}
console.log(avgPair([1, 2, 3], 2.5));
console.log(avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(avgPair([-1, 0, 3], 4.1));
console.log(avgPair([], 1)); */

////////////////////////////////////////////////////////////////

/* 6.  minSubArrLen
Given two parameters an array of positive integers and a target number. Return minimal length of a contiguous subarray of which the sum is greater than or equal to the target number. If there isn't one, return 0. Constraints: Time: O(N) Space: O(1) Ex:
minSubArrLen([2, 3, 1, 2, 4, 3], 7) //2 -> because [4, 3] is the smallest subarray
minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrLen([1, 2, 3], 100) // 0
Related Topics: Sliding window */

/* function minSubArrLen(arr, target) {
  let left = 0;
  let right = -1;
  let sumArr = 0;
  let minSize = arr.length;
  while (left < arr.length) {
    if (right + 1 < arr.length && sumArr < target) {
      sumArr += arr[++right];
    } else {
      sumArr -= arr[left++];
    }
    if (sumArr >= target) {
      minSize = Math.min(minSize, right - left + 1);
    }
  }
  return minSize === arr.length ? 0 : minSize;
}
console.log(minSubArrLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrLen([1, 2, 3], 100)); */

////////////////////////////////////////////////////////////////

/* 7.  factorial
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.
Related Topics: Recursion */

/* function factorial(n) {
  if (typeof n === "number") {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
  } else {
    return "not a number";
  }
}
console.log(factorial(4)); */

////////////////////////////////////////////////////////////////

/* 8.  power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
Related Topics: Recursion */

/* function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(power(5, 2)); */

////////////////////////////////////////////////////////////////

/* 9.  isPalindrome
Determine if LinkedList is a palindrome. Palindrome is when you can read forward and backward same.
Ex:
1->2->2->1 //true
1->2->1 //true
1->2->1->2 //false
Related Topics: Linked List */

// NOT SOLVED
/* class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

function isPalindrome(head) {
  //implement here
} */

////////////////////////////////////////////////////////////////

/* 10.  printLen
Print the length of linked list;
Ex:
let n = new Node(1)
n.next = new Node(2)
printLen(n) // 2
Related Topics: Linked List */

// NOT SOLVED
/* class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

function printLen(node) {
  //implement here
} */

// example
/* const el = {
  val: "pet",
  next: {
    val: "cat",
    next: {
      val: "kitten",
      next: {
        val: "kitty",
        next: null,
      },
    },
  },
};

function printLen(node) {
  let entrance = node;
  let length = 0;
  while (entrance && entrance.val) {
    length++;
    entrance = entrance.next;
  }
  return length;
}
console.log(printLen(el)); */

////////////////////////////////////////////////////////////////

/* 11.  removeDups
Write a function called removeDups to remove duplicates from the unsorted linked list.
Ex:
let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
// 1->1->2->null
removeDups(head);
//1->2->null
Related Topics: Linked List */

// NOT SOLVED
/* class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

function removeDups(node) {
  //implement here
} */
