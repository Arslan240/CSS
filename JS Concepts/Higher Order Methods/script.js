const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For loop

// for(let i = 0; i < ages.length; i++){
//   console.log(ages[i]);
// }

// ForEach Loop

// companies.forEach(company => {
//   console.log(company.name);
// })

// Filter method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// We want numbers greater than 21.

// let greaterNum = [];
// for(let i=0; i < ages.length; i++){
//   if(ages[i] > 21){
//     greaterNum.push(ages[i]);
//   }
// }

// ages.forEach(age => {
//   if(age > 21){
//     greaterNum.push(age);
//   }
// })
// console.log(greaterNum);

// Using filter function, as filter returns a new array so we'll store it.
// const greaterNum = ages.filter((age) =>{
//   if(age > 21){
//     return true; //it'll add the value of age to the new created array.
//   }
// })

// shortest and cleanest code
// const greaterNum = ages.filter(age => age > 21);
// console.log(greaterNum);

// Filter Retail Companies
// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail'){
//     return true;
//   }
// });

// ES6 version
// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// companies that lasted at least 10 years.
// const lasted10Years = companies.filter(company => (company.end - company.start >= 10));
// console.log(lasted10Years);

// Map
// A map creates a new array from the values which are returned from the callback function passed to it. It can include any values that are not in the actual array.
// Unlike filter, which can only add values which are present in the array on which filter is applied.

// Create array of companyNames
// const companyNames = companies.map(company => {
//   return `${company.name} [${company.start} - ${company.end}]`;
// })

// ES6
// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(companyNames);

// const agesSquare = ages.map(age => Math.sqrt(age).toFixed(1));
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesSquare);
// console.log(agesTimesTwo);

// Chaining of maps 
// We can apply a map on another map directly. Second map will use first map's return array and apply the functionality on returned array elements and then return a second new array.
// we find two multiplied by the square root of ages array values

// const agesSqaureRootTimesTwo = ages
//   .map(age => Math.sqrt(age).toFixed(1))
//   .map(age => age * 2);

// console.log(agesSqaureRootTimesTwo);

// SORT
// Sort function accepts two arguments and compares them acc to a condition defined by us, and based on that condition a new sorted array is returned. e.g.

// const sortedCompanies = companies.sort((comp1, comp2) => {
//   console.log(comp1.start, comp2.start);
//   if(comp1.start > comp2.start){
//     return 1;
//   } 
//   else return -1;
// })

// const sortedCompanies = companies.sort((comp1, comp2) => (comp1.start > comp2.start ? 1 : -1));
// console.log(sortedCompanies);

// Sort Ages
// const sortAges = ages.sort((a, b) => a - b); //IDK how it works a - b
// console.log(sortAges);

// REDUCE Function
// the reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// we'll add elements of age to show functionality of reduce.
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum =ages.reduce((total, age) => {
//   return total + age;
// }, 0); //this 0 afterwards tells the initial value of 'total' variable. 

// const ageSum = ages.reduce((total,age) => total + age, 0);
// console.log(ageSum);
// first parameter is the variable which stores the sum performed.


// Get total years for all companies>>
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);


// Combined Methods
// We multiply ages with 2
// then we filter out ages greater than 40
// then we sort them in ascending order
// then we add all the values together.

const combined = ages
  .map(age => age * 2)
  .filter(age => age>= 40)
  .sort((a, b) => a>b ? 1 : -1)
  .reduce((total, age) => total + age,0);

console.log(combined);





















