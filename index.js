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
