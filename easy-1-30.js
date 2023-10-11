/* 1.  Your function will be given an input parameter incoming. Please console.log this value.
`print('test') // test` 
Related Topics: Function */

/* function print(input) {
  console.log(input);
}
print("test"); */

////////////////////////////////////////////////////////////////

/* 2.  sayHello
Create a function sayHello(). Within it, console.log string "Hello world!"
Related Topics: Function */

/* function sayHello() {
  console.log("Hello world!");
}
sayHello(); */

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

/* 12.  setting-and-swapping
Create two variables: num and name1. Set num's value to 50. Set name1's value to 'Sam'. Now swap values: set num to 'Sam' and name1 to 50.
Related Topics: Variables */

/* let num = 50;
let name1 = "Sam";
let temp = num;
num = name1;
name1 = temp;
console.log(num + " " + name1); */

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

/* 19.  Multiples-of-Three-notest
Using FOR loop, print multiples of 3 starting from -400 to 0. Skip numbers -3 and -6.
Related Topics: Loop */

// 1st way with for loop
/* for (let i = -400; i <= 0; i++) {
  if (i === -3) {
    continue;
  } else if (i === -6) {
    continue;
  } else if (i % 3 === 0) {
    console.log(i);
  }
} */

// 2nd way with for loop
/* for (let i = -400; i <= 0; i++) {
  if (i % 3 === 0 && i !== -3 && i !== -6) {
    console.log(i);
  }
} */

// 3rd way with while loop
/* let num = -400;
while (num <= 0) {
  switch (true) {
    case num % 3 === 0 && num !== -3 && num !== -6:
      console.log(num);
      break;
    default:
  }
  num++;
} */

////////////////////////////////////////////////////////////////

/* 20.  Print-and-Count-notest
Print and Count
Using For loop, print all multiples of 5 starting from 512 to 4096. Count how many integers are multiples of 5 and log the amount on the console.
Related Topics: Loop */

// 1st way with for loop
/* function printCount() {
  let counter = 0;
  for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
      console.log(i);
      counter++;
    }
  }
  console.log(counter);
}
printCount(); */

// 2nd way with while loop
/* function printCount() {
  let counter = 0;
  let num = 512;
  while (num <= 4096) {
    switch (true) {
      case num % 5 === 0:
        console.log(num);
        counter++;
        break;
      default:
    }
    num++;
  }
  console.log(counter);
}
printCount(); */

////////////////////////////////////////////////////////////////

/* 21.  checkAge
Write a function called "checkAge".
Given a person's name and age, "checkAge" returns one of two messages:
"Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.
Naturally, replace "{insert_name_here}" with the given name. :)
var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
Related Topics: Variables */

// 1st way
/* function checkAge(name, age) {
  if (age >= 21) {
    return `Welcome, ${name}!`;
  } else {
    return `Go home, ${name}!`;
  }
}
console.log(checkAge("Adrian", 22)); */

// 2nd way
/* function checkAge(name, age) {
  return age >= 21 ? `Welcome, ${name}!` : `Go home, ${name}!`;
}
console.log(checkAge("Adrian", 22)); */

// 3rd way
/* function checkAge(name, age) {
  switch (true) {
    case age >= 21:
      return `Welcome, ${name}!`;
      break;
    default:
      return `Go home, ${name}!`;
  }
}
console.log(checkAge("Adrian", 22)); */

////////////////////////////////////////////////////////////////

/* 22.  Multiples-of-Six
Write a function called "multiplesOfSix".
Using WHILE loop, print multiples of 6 starting from 0 up to 60,000
var output = multiplesOfSix();
console.log(output); // -->   
Related Topics: Loop */

// 1st way
/* function multiplesOfSix() {
  let num = 0;
  while (num <= 60000) {
    if (num % 6 === 0) {
      console.log(num);
    }
    num++;
  }
}
multiplesOfSix(); */

// 2nd way
/* function multiplesOfSix() {
  for (let i = 0; i <= 60000; i++) {
    switch (true) {
      case i % 6 === 0:
        console.log(i);
        break;
      default:
    }
  }
}
multiplesOfSix(); */

////////////////////////////////////////////////////////////////

/* 23.  add-odd-integers-notest
Using FOR loop, Add odd integers from -300,000 to 300,000 and console.log the final sum.
var output = addOddIntegers();
console.log(output); 
Related Topics: Loop */

// 1st way
/* let counter = 0;
for (let i = -300000; i <= 300000; i++) {
  if (i % 2 !== 0) {
    counter += i;
  }
}
console.log(counter); */

// 2nd way
/* let counter = 0;
let num = -300000;
while (num <= 300000) {
  switch (true) {
    case num % 2 !== 0:
      counter += num + num * -1;
      break;
    default:
  }
  num++;
}
console.log(counter); */

////////////////////////////////////////////////////////////////

/* 24.  Countdown-by-Fours-notest
Using WHILE loop, log multiples of 4 starting from 2016 to 0.
Related Topics: Loop */

// 1st way
/* let num = 2016;
while (num >= 0) {
  switch (true) {
    case num % 4 === 0:
      console.log(num);
      break;
    default:
  }
  num--;
} */

// 2nd way
/* for (let i = 2016; i >= 0; i--) {
  if (i % 4 === 0) console.log(i);
} */

////////////////////////////////////////////////////////////////

/* 25.  printIntaAndSum0To255
Using FOR loop, get a sum of all numbers from 0 to 255 (255 included). Return the sum. Inside the loop, also console.log the value of sum and see how the value is changing on every iteration.
Related Topics: Loop */

// 1st way
/* function printIntaAndSum0To255() {
  let counter = 0;
  for (let i = 0; i <= 255; i++) {
    counter += i;
    console.log(counter);
  }
  return counter;
}
console.log(printIntaAndSum0To255()); */

// 2nd way
/* function printIntaAndSum0To255() {
  let counter = 0;
  let num = 0;
  while (num <= 255) {
    counter += num;
    console.log(counter);
    num++;
  }
  return counter;
}
console.log(printIntaAndSum0To255()); */

////////////////////////////////////////////////////////////////

/* 26.  Print-Odds-1-255-notest
Using FOR loop and modulus operator, print all odd integers from 1 to 255.
output -> 1, 3, 5...
Related Topics: Loop */

// 1st way
/* function printOdds1To255() {
  for (let i = 1; i <= 255; i++) {
    i % 2 !== 0 ? console.log(i) : null;
  }
}
printOdds1To255(); */

// 2nd way
/* function printOdds1To255() {
  let num = 0;
  while (num <= 255) {
    switch (true) {
      case num % 2 !== 0:
        console.log(num);
        break;
      default:
    }
    num++;
  }
}
printOdds1To255(); */

////////////////////////////////////////////////////////////////

/* 27.  Threes-and-Fives
Create threesFives() that finds values from 100 and 400 (including 400) that are divisible by either 3 or 5, but not both 3 and 5. Get the sum of those values. Display the final sum in the console.
`threesFives()`
Related Topics: Loop */

// 1st way
/* function threesFives() {
  let sum = 0;
  for (let i = 100; i <= 400; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      continue;
    } else if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
threesFives(); */

// 2nd way
/* function threesFives() {
  let sum = 0;
  for (let i = 100; i <= 400; i++) {
    i % 3 && i % 5 ? null : i % 3 || i % 5 ? (sum += i) : null;
  }
  console.log(sum);
}
threesFives(); */

// 3rd way
/* function threesFives() {
  let sum = 0;
  let num = 100;
  while (num <= 400) {
    switch (true) {
      case num % 3 === 0 && num % 5 === 0:
        null;
        break;
      case num % 3 === 0 || num % 5 === 0:
        sum += num;
        break;
      default:
    }
    num++;
  }
  console.log(sum);
}
threesFives(); */

////////////////////////////////////////////////////////////////

/* 28.  modulo
Write a function called "modulo".
Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
Extra: Can you do without using the actual built-in modulo (aka "remainder") operator (%) in your implementation.
var output = modulo(25, 4);
console.log(output); // --> 1
Related Topics: Variables */

// 1st way
/* function modulo(num1, num2) {
  let divide = Math.round(num1 / num2);
  let remainder = num1 - divide * num2;
  if (remainder >= 1) {
    return remainder;
  } else {
    return num1;
  }
}
console.log(modulo(25, 4)); */

// 2nd way
/* function modulo(num1, num2) {
  let divide = Math.round(num1 / num2);
  let remainder = num1 - divide * num2;
  switch (true) {
    case remainder >= 1:
      return remainder;
      break;
    default:
      num1;
  }
}
console.log(modulo(25, 4)); */

////////////////////////////////////////////////////////////////

/* 29.  multiply
Write a function called "multiply".
Given 2 numbers, "multiply" returns their product.
Notes: It should not use the multiply operator (*).\
var output = multiply(4, 7);
console.log(output); // --> 28
Related Topics: Loop */

// 1st way
/* function multiply(num1, num2) {
  let output = 0;
  for (let i = 1; i <= num2; i++) {
    output += num1;
  }
  return output;
}
console.log(multiply(4, 7)); */

// 2nd way
/* function multiply(num1, num2) {
  let output = 0;
  let num = 1;
  while (num <= num2) {
    output += num1;
    num++;
  }
  return output;
}
console.log(multiply(4, 7)); */

////////////////////////////////////////////////////////////////

/* 30.  isEven
Write a function called "isEven".
Given a number, "isEven" returns whether it is even.
var output = isEven(11);
console.log(output); // --> false
Related Topics: Variables */

// 1st way
/* function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(11)); */

// 2nd way
/* function isEven(num) {
  return num % 2 === 0 ? true : false;
}
console.log(isEven(11)); */

// 3rd way
/* function isEven(num) {
  switch (true) {
    case num % 2 === 0:
      return true;
    default:
      return false;
  }
}
console.log(isEven(11)); */
