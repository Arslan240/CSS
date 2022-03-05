// Async / await

const hasMeeting = true;
  // Promise 1
  const meeting = new Promise((resolve, reject) => {
    if(hasMeeting === true){
      const meetingDetails = {
        name: 'Marketing Meeting',
        location: 'Skype',
        time: '1:00 PM'
      };
      resolve(meetingDetails);
    }
    else {
      reject(new Error('Meetind already scheduled'));
    }
  });

  // Promise 2
  const addToCalendar = (meetingDetails) => {
    // shorter way.
    const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    return Promise.resolve(calendar);
  }

// The part where we call promises and add .then(), .catch() on them. We just create a function in which we assign every promise's result to a variable in the sequence we want the promises to execute. At the end we'll have our result
// add async at start of function, add await before every promise.
async function myMeeting() {
  const meetindDetails = await meeting;
  const meetingResult = await addToCalendar(meetindDetails); //addToCalendar is not a promise itself, it's a function which accepts meetingDetails returned by previous promise.
  console.log(meetingResult);
}

  // now we need to call the funciton.
  myMeeting();



// Promise
// When we need results from multiple promises

// const promise1 = Promise.resolve('Promise1 completed.');
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise2 resolved.');
//   }, 2000);
// });

// because we are using all, promises will be returned at once according to the longest time that a promise will take.
// Promise.all([promise1, promise2])
//   .then(res => console.log(res));


// const hasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//   if(hasMeeting === true){
//     const meetingDetails = {
//       name: 'Marketing Meeting',
//       location: 'Skype',
//       time: '1:00 PM'
//     };
//     resolve(meetingDetails);
//   }
//   else {
//     reject(new Error('Meetind already scheduled'));
//   }
// });

// const addToCalendar = (meetingDetails) => {
//   // shorter way.
//   const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//   return Promise.resolve(calendar);
  
//   // if we just want to resolve and return promise with just one variable, we can use better and shorter way
//   // return new Promise((resolve, reject) => {
//   //   const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//   //   resolve(calendar);
//   // });
// }

// meeting is a promise, when it returns it has meetindDetails which is passed to the next .then() function's callback because it expects' one argument.
// meeting 
//   .then(addToCalendar)
//   .then(res => {
//     console.log('Meeting scheduled');
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });





// const names = ['John', 'Mary', 'Bob'];
// const greet = names.map(name => `Hello ${name}`);
// console.log(greet) ;



// setTimeout(()=> {
//   console.log('coffee');
// }, 5000);
// console.log('milk');
// console.log('toast');