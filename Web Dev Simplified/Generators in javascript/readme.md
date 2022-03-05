### What is a Generator function?

A generator function is a function which can take a pause and return a value, come back again to resume from the paused point and run upto the next return point and resume.


### How to define a generator function?

>function* generatorFunction() {
>  yield something
>}

yeild keyword is the point where the function returns and if called again resumes from last yield point.

### What's inside a generator function object?

A generator object's prototype contains 3 functions.

>.next()
>.return()
>.throw()

**We can have multiple generator objects at the same time.**
If we create another instance of generatorFunction. It'll just start from the beginning and work from there. So, we can have multiple instances of same generatorFunctions and they'll work independently.

The generator function works in multiple steps.
In first step we need to create a generator object and store it's instance. On the first call the generator object is created. 

> const generatorObject = generatorFunction()

#### next() function

After that we use that generator object and call .next function on it. 

> const generatorObject = generatorFunction()
>generatorObject.next()

we can also pass values to next function. this value will be reurned by yield where it was called last time and then flow will start from there.

> const generatorObject = generatorFunction()
>generatorObject.next()
> //we can pass values to next function
>generatorObject.next(54)

.next returns an object containing a  'done' value and a value of 'value'.

> { 
>  value: any value
>  done: true / false
> }




### Usecases of Generators

  * For infinite loops
  * 
  * For iterators

#### Infinite loops

#### Iterators

we can use iterators