/* 1.  isBiggerThan5
Create a function which returns true if all elements of a given array are bigger then 5
Note: Please use loop and higher order functions
Related Topics: Function */

// 1st way
/* const isBiggerThan5 = (arr) => {
  return arr.every((el) => el > 5);
};
console.log(isBiggerThan5([1, 2, 3, 4]));
console.log(isBiggerThan5([25, 15, 12, 14])); */

// 2nd way
/* const isBiggerThan5 = (arr) => {
  let isBigger = true;
  for (let el of arr) {
    if (el < 5) {
      isBigger = false;
    }
  }
  return isBigger;
};
console.log(isBiggerThan5([1, 2, 3, 4]));
console.log(isBiggerThan5([25, 15, 12, 14])); */

/* 2.  isLessThan
Create a function which returns true if any element of a given array is less then a given number
`isLessThan([1,2,3,4],2) // true
isLessThan([10,20,60],10) // false`
Note: Please use loop and higher order functions (some)
Related Topics: Function */

// 1st way
/* const isLessThan = (arr, num) => {
  return arr.some((el) => el < num);
};
console.log(isLessThan([1, 2, 3, 4], 2));
console.log(isLessThan([10, 20, 60], 10)); */

// 2nd way
/* const isLessThan = (arr, num) => {
  for (let el of arr) {
    if (el < num) return true;
    else return false;
  }
};
console.log(isLessThan([1, 2, 3, 4], 2));
console.log(isLessThan([10, 20, 60], 10)); */

/* 3.  lastIndexOf
Create a function which returns last index of an item from a given array.
Notes:  Please use lastIndexOf or loop
`lastIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // 2
lastIndexOf([1,1,2,3,1,3], 1) //` 
Related Topics: Function, Loop, Array */

// 1st way
/* const lastIndexOf = (arr, item) => {
  return arr.lastIndexOf(item);
};
console.log(lastIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple"));
console.log(lastIndexOf([1, 1, 2, 3, 1, 3], 1)); */

// 2nd way
/* const lastIndexOf = (arr, item) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === item) {
      return i;
    }
  }
};
console.log(lastIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple"));
console.log(lastIndexOf([1, 1, 2, 3, 1, 3], 1)); */

// 3rd way
/* function lastIndexOf(arr, item) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === item ? (result = i) : null;
  }
  return result;
}
console.log(lastIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple"));
console.log(lastIndexOf([1, 1, 2, 3, 1, 3], 1)); */

/* 4.  allIndexOf
Create a function which returns all indexes of an item from a given array.
Notes:  Please use loop
`allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // [0,2]
allIndexOf([1,1,2,3,1,3], 1) // [0,1,4]`
Related Topics: Function, Loop, Array */

/* const allIndexOf = (arr, item) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) result.push(i);
  }
  return result;
};
console.log(allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple"));
console.log(allIndexOf([1, 1, 2, 3, 1, 3], 1)); */

/* 5.  addPostfix
Create a function which adds a postfix to a given array items.
Notes:  Please use map or loop
`addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")` 
`// ["Apple+", "Orange+", "Apple+", "Mango+"]`
Related Topics: Function, Loop, Array */

// 1st way
/* const addPostfix = (arr, postfix) => {
  return arr.map((el) => el + postfix);
};
console.log(addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")); */

// 2nd way - same array
/* const addPostfix = (arr, postfix) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.splice(i, 1, arr[i].concat(postfix));
  }
  return arr;
};
console.log(addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")); */

// 3rd way - new array
/* const addPostfix = (arr, postfix) => {
  let output = [];
  let i = 0;
  while (i < arr.length) {
    output.push(`${arr[i]}${postfix}`);
    i++;
  }
  return output;
};
console.log(addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")); */

/* 6.  addPostfixMiddle
Create a function which adds postfix between array items and convert to a string.
`addPostfixMiddle(["Apple", "Orange", "Kiwi"], "and")` 
`// "Apple and Orange and Kiwi"`
Related Topics: Function, Array */

/* const addPostfixMiddle = (arr, str) => {
  return arr.join(` ${str} `);
};
console.log(addPostfixMiddle(["Apple", "Orange", "Kiwi"], "and")); */

/* 7.  countItem
Create a function which finds how many item inside a given array.
Note: You can use loop
`countItem([1,2,4,5,8,5,1,5], 5) // 3`
Related Topics: Function, Loop, Array */

/* const countItem = (arr, num) => {
  let counter = 0;
  for (let el of arr) {
    el === num ? counter++ : null;
  }
  return counter;
};
console.log(countItem([1, 2, 4, 5, 8, 5, 1, 5], 5)); */

/* 8.  sumAll
Create a function which finds sum of all elements from a given array
Note: Please use reduce, loop
`sumAll([1,2,3,4]) // 10`
Related Topics: Function, Loop, Array */

// 1st way
/* const sumAll = (arr) => {
  return arr.reduce((acc, currVal) => {
    return (acc += currVal);
  }, 0);
};
console.log(sumAll([1, 2, 3, 4])); */

// 2nd way
/* const sumAll = (arr) => {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
};
console.log(sumAll([1, 2, 3, 4])); */

/* 9.  sumAllNums
Create a function which returns sum of all numbers from a given array. [1,{}, null,2] => 3
`sumAllNums([1,{}, null,2]) // 3`
`sumAllNums(["1",NaN, null,2]) // 2`
Related Topics: Function, Loop, Array, typeof, NaN */

/* const sumAllNums = (arr) => {
  let sum = 0;
  for (let el of arr) {
    isNaN(el) ? (el = 0) : el;
    typeof el === "number" ? (sum += el) : null;
  }
  return sum;
};
console.log(sumAllNums([1, {}, null, 2]));
console.log(sumAllNums(["1", NaN, null, 2])); */

/* 10.  filterChar
Create a function to filter all chars which are not equal to a given char from an arrays. ['a','b','A','c'], 'a' => ['b','c']
NOTE: use reduce, filter, loop
`filterChar(['a','b','A','c'], 'a') // ['b','c']`
Related Topics: Function, Loop, Array */

// 1st way
/* const filterChar = (arr, char) => {
  return arr.filter((el) => {
    if (typeof el === "string" && typeof char === "string") {
      return el.toLowerCase() !== char.toLowerCase();
    } else {
      return el !== char;
    }
  });
};
console.log(filterChar(["a", "b", "A", "c"], "a"));
console.log(filterChar([1, "1", "c"], 1)); */

// 2nd way
/* const filterChar = (arr, char) => {
  return arr.reduce((acc, currVal) => {
    if (typeof currVal === "string" && typeof char === "string") {
      if (currVal.toLowerCase() !== char.toLowerCase()) {
        acc.push(currVal);
      }
    } else if (currVal !== char) {
      acc.push(currVal);
    }
    return acc;
  }, []);
};
console.log(filterChar(["a", "b", "A", "c"], "a"));
console.log(filterChar([1, "1", "c"], 1)); */

// 3rd way - same array
/* const filterChar = (arr, char) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (
      typeof arr[i] === "string" &&
      typeof char === "string" &&
      arr[i].toLowerCase() === char.toLowerCase()
    ) {
      arr.splice(i, 1);
    } else if (arr[i] === char) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
console.log(filterChar(["a", "b", "A", "c"], "a"));
console.log(filterChar([1, "1", "c"], 1)); */

// 4th way - new array
/* const filterChar = (arr, char) => {
  let result = [];
  for (let el of arr) {
    if (typeof el === "string" && typeof char === "string") {
      if (el.toLowerCase() !== char.toLowerCase()) result.push(el);
    } else if (el !== char) result.push(el);
  }
  return result;
};
console.log(filterChar(["a", "b", "A", "c"], "a"));
console.log(filterChar([1, "1", "c"], 1)); */
