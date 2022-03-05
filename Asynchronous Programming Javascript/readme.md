### Callback Functions

In javascript a function is a first class object.

  * It can be assigned to a variable.
  * It can be passed to a function, which can be called inside that function.


### Promises

Promises are made to escape callback hell.

  Promises have three states
  * Pending
  * resolved
  * rejected

#### Promise Functions

Promise functions are given below
  * .then() - it is called when a promise is resolved.
  * .catch() - called when promise is rejected
  * .all() - we use Promise.all() when we need to complete multiple promises in a row and then we add a .then on the whole function
  * .race() - .race allows us to resolve promise if only one promise from multiple promises is resolved. 

### Async / await 

It is just syntactic sugar on generator functions and promises to make it look nicer.

#### How to declare an async function?

>async function functionName(){
> const promiseResult1 = await promise;
> const promiseResult2 = await PromiseReturningFunction(promiseResult1);
> console.log(promiseResult2);
>}

#### Catching Errors in Async functions

  Two Main ways
  * Try / catch 
  * .catch() on function call - not recommended

>async function functionName() {
> try {
>   //Do things
> } 
> catch (error) {
>   //do things with error 
> }
>}