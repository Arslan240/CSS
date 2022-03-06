let marks1 = 760;
let marks2 = 77;
let marks3 = 34;
const passMarks = 200;


/* PROMISES */
let calculateResultsProm = (highestMarks) =>{
  return new Promise( (resolve, reject) => {
      
      const sum = marks1 + marks2 + marks3;
      const difference = sum - passMarks;
      console.log('highest marks is ' + highestMarks);
      
      if(difference >= passMarks + 100){
        resolve('Student passed very gooddlyy.');
      }
      if(sum >= passMarks) {
        resolve(`Student is passed ${sum - passMarks} with difference.`);
      }
      else if (sum < passMarks) {
        reject(`Student is failed miserably by  ${passMarks - sum} marks.`);
      }
});
}

// calling the function which returns a promise and we have to handle that promise using then and catch.
calculateResultsProm(654).then((message) => {
  console.log('first then part');
  console.log(message);
}).then((message) => {
  console.log('second then part');
  console.log(message);
})
.catch((message) => {
  console.log('catch part of promise.');
  console.log(message);
});

// chaining the promises



/* CALLBACK FUNCTIONS */
function calculateResults(passCallback, failCallback){
  const sum = marks1 + marks2 + marks3;

  if(sum >= passMarks) {
    passCallback(`Student is passed ${sum - passMarks} with difference.`);
  }
  else if (sum < passMarks) {
    failCallback(`Student is failed miserably by  ${passMarks - sum} marks.`);
  }
}

// here we call the calculateResults and we use arrow functions as callback functions.
// But it's quite possible that we create two new functions separately and pass them in. It will be more long and dispersed code.
// calculateResults((message) => {
//   console.log('pass callback function.');
//   console.log(message);
// }, (message) => {
//   console.log('fail callback function.');
//   console.log(message);
// });