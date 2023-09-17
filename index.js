//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const q1 = numbers.filter((x) => x >= 25);
const q2 = numbers.filter((x) => x % 5 === 0);
console.log(q1);
console.log(q2);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const q3 = numbers.map((x) => x ** 2);
const q4 = numbers.map((x) => x * 2);

console.log(q3);
console.log(q4);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const q5 = numbers.filter((x) => x >= 20).map((x) => x ** 2);
const q6 = numbers.filter((x) => x % 5 === 0).map((x) => x * 3);
console.log(q5);
console.log(q6);

// EXTRA

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
  array.forEach((x) => {
    console.log(x);
  });
};
logger([1, 2, 3, 4]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
  const fehArray = temperatures.map((x) => Math.round((x - 32) * (5 / 9)));
  console.log(fehArray);
};
toCelsius([85, 90, 110]);

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  const hotDays = temperatures.filter((x) => x > threshhold);
  console.log(hotDays);
};
hottestDays([10, 20, 30], 25);

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  const hottestDay = temperatures
    .filter((x) => x > threshhold)
    .map((x) => Math.round((x - 32) * (5 / 9)));
  console.log(hottestDay);
};
logHottestDays([80, 90, 110], 85);
