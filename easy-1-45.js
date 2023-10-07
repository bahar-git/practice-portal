/* 1.  Your function will be given an input parameter incoming. Please console.log this value.
`print('test') // test` 
Related Topics: Function */

/* function print(input) {
  console.log(input);
}
print("test"); */

/* 2.  sayHello
Create a function sayHello(). Within it, console.log string "Hello world!"
Related Topics: Function */

/* function sayHello() {
  console.log("Hello world!");
}
sayHello(); */

/* 3.  getFullName
Write a function called "getFullName".
Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'
Related Topics: Function */

/* function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("Joe", "Smith")); */

/* 4.  getLengthOfWord
Write a function called "getLengthOfWord".
Given a word, "getLengthOfWord" returns the length of the given word.
var output = getLengthOfWord('some');
console.log(output); // --> 4
Related Topics: Variables */

/* function getLengthOfWord(str) {
  return str.length;
}
console.log(getLengthOfWord("some")); */

/* 5.  isGreaterThanTen
Write a function called "isGreaterThanTen".
Given a number, "isGreaterThanTen" returns whether it is greater than 10.
var output = isGreaterThanTen(11);
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isGreaterThanTen(number) {
  if (number > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isGreaterThanTen(11)); */

// 2nd way
/* function isGreaterThanTen(number) {
  return number > 10 ? true : false;
}
console.log(isGreaterThanTen(11)); */

/* 6.  getLengthOfTwoWords
Write a function called "getLengthOfTwoWords".
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
Related Topics: Variables */

// 1st way
/* function getLengthOfTwoWords(str1, str2) {
  const str = str1 + str2;
  return str.length;
}
console.log(getLengthOfTwoWords("some", "words")); */

// 2nd way
/* function getLengthOfTwoWords(str1, str2) {
  return (str1 + str2).length;
}
console.log(getLengthOfTwoWords("some", "words")); */

/* 7.  isLessThan30
Write a function called "isLessThan30".
Given a number, "isLessThan30" returns whether the given number is less than 30.
var output = isLessThan30(9);
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isLessThan30(number) {
  if (number < 30) {
    return true;
  } else {
    return false;
  }
}
console.log(isLessThan30(9)); */

// 2nd way
/* function isLessThan30(number) {
  return number < 30 ? true : false;
}
console.log(isLessThan30(9)); */

/* 8.  equalsTen
Write a function called "equalsTen".
Given a number, "equalsTen" returns whether or not the given number is 10.
var output = equalsTen(9);
console.log(output); // --> false
Related Topics: Variables */

// 1st way
/* function equalsTen(number) {
  if (number === 10) {
    return true;
  } else {
    return false;
  }
}
console.log(equalsTen(9)); */

// 2nd way
/* function equalsTen(number) {
  return number === 10 ? true : false;
}
console.log(equalsTen(9)); */

/* 9.  isLessThan
Write a function called "isLessThan".
Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
var output = isLessThan(9, 4);
console.log(output); // --> true
Related Topics: Variables  */

// 1st way
/* function isLessThan(num1, num2) {
  if (num2 < num1) {
    return true;
  } else {
    return false;
  }
}
console.log(isLessThan(9, 4)); */

// 2nd way
/* function isLessThan(num1, num2) {
  return num2 < num1 ? true : false;
}
console.log(isLessThan(9, 4)); */

/* 10.  isGreaterThan
Write a function called "isGreaterThan".
Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.
var output = isGreaterThan(11, 10);
console.log(output); // --> false
Related Topics: Variables */

// 1st way
/* function isGreaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}
console.log(isGreaterThan(11, 10)); */

// 2nd way
/* function isGreaterThan(num1, num2) {
  return num2 > num1 ? true : false;
}
console.log(isGreaterThan(11, 10)); */

/* 11.  isEqualTo
Write a function called "isEqualTo".
Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
var output = isEqualTo(11, 10);
console.log(output); // --> false
Related Topics: Variables */

// 1st way
/* function isEqualTo(num1, num2) {
  if (num2 === num1) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqualTo(11, 10)); */

// 2nd way
/* function isEqualTo(num1, num2) {
  return num2 === num1 ? true : false;
}
console.log(isEqualTo(11, 10)); */

/* 12.  setting-and-swapping
Create two variables: num and name1. Set num's value to 50. Set name1's value to 'Sam'. Now swap values: set num to 'Sam' and name1 to 50.
Related Topics: Variables */

/* let num = 50;
let name1 = "Sam";
let temp = num;
num = name1;
name1 = temp;
console.log(num + " " + name1); */

/* 13.  isOldEnoughToDrink
Write a function called "isOldEnoughToDrink".
Given an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
Related Topics: Variables */

// 1st way
/* function isOldEnoughToDrink(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrink(22)); */

// 2nd way
/* function isOldEnoughToDrink(age) {
  return age >= 21 ? true : false;
}
console.log(isOldEnoughToDrink(22)); */

// 3rd way
/* function isOldEnoughToDrink(age) {
  const allowedAge = 21;
  while (age >= allowedAge) {
    return true;
  }
  return false;
}
console.log(isOldEnoughToDrink(22)); */

/* 14.  isOldEnoughToDrive
Write a function called "isOldEnoughToDrive".
Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
Notes:* The legal driving age in the United States is 16.
var output = isOldEnoughToDrive(22);
console.log(output); // --> true
Related Topics: Variables */

// 1st way - time complexity O(n)
/* function isOldEnoughToDrive(age) {
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrive(22)); */

// 2nd way - time complexity O(n)
/* function isOldEnoughToDrive(age) {
  return age >= 16 ? true : false;
}
console.log(isOldEnoughToDrive(22)); */

// 3rd way - time complexity O(1)
/* function isOldEnoughToDrive(age) {
  switch (true) {
    case age >= 16:
      return true;
      break;
    case age < 16:
      return false;
      break;
    default:
      return false;
  }
}
console.log(isOldEnoughToDrive(22)); */

/* 15.  isOldEnoughToVote
Write a function called "isOldEnoughToVote".
Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.
Notes:* The legal voting age in the United States is 18.
var output = isOldEnoughToVote(22);
console.log(output); // --> true
Related Topics: Variables */

// 1st way - time complexity O(n)
/* function isOldEnoughToVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToVote(22)); */

// 2nd way - time complexity O(n)
/* function isOldEnoughToVote(age) {
  return age >= 18 ? true : false;
}
console.log(isOldEnoughToVote(22)); */

// 3rd way - time complexity O(1)
/* function isOldEnoughToVote(age) {
  switch (true) {
    case age >= 18:
      return true;
      break;
    default:
      return false;
  }
}
console.log(isOldEnoughToVote(22)); */

/* 16.  isOldEnoughToDrinkAndDrive
Write a function called "isOldEnoughToDrinkAndDrive".
Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:* The legal drinking age in the United States is 21.* It is always illegal to drink and drive in the United States.
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
Related Topics: Variables */

// 1st way - time complexity O(n)
/* function isOldEnoughToDrinkAndDrive(age) {
  if (age >= 16) {
    return false;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrinkAndDrive(22)); */

// 2nd way - time complexity O(n)
/* function isOldEnoughToDrinkAndDrive(age) {
  return age >= 16 ? false : false;
}
console.log(isOldEnoughToDrinkAndDrive(22)); */

// 3rd way - time complexity O(1)
/* function isOldEnoughToDrinkAndDrive(age) {
  switch (true) {
    case age >= 16:
      return false;
      break;
    default:
      return false;
  }
}
console.log(isOldEnoughToDrinkAndDrive(22)); */

/* 17.  Printing-Integers-While-notest
Printing Integers with for loop.
Print integers from 1000 to 3450.
Related Topics: Loop */

// 1st way with for loop
/* for (let i = 1000; i <= 3450; i++) {
  console.log(i);
} */

// 2nd way with while loop
/* let num = 1000;
while (num <= 3450) {
  console.log(num);
  num++;
} */

/* 18.  print-30-to-750-notest
Print numbers from -50 to 350.
Hint:* You can use for or while loop.
Related Topics: Loop */

// 1st way with for loop
/* for (let i = -50; i <= 350; i++) {
  console.log(i);
} */

// 2nd way with while loop
/* let num = -50;
while (num <= 350) {
  console.log(num);
  num++;
} */

/* 19.  Multiples-of-Three-notest
Using FOR loop, print multiples of 3 starting from -400 to 0. Skip numbers -3 and -6.
Related Topics: Loop */
