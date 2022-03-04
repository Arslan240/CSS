### Callbacks

1- In Javascript functions are also objects. We can also pass them into functions and then they can be called from within those functions even if they are out of the scope. 
We can pass different functions to tackle different situation which may arrive. And those passed functions are called callback functions. While calling callback functions we can also pass arguments to it and it'll be handled accordingly.


### Promises

1- Promises are made to deal with callback hell, if callbacks are nested it can create callback hell. 
Promise does two things by default, it provides two functions resolve and reject. We can call resolve() when we achieved what we wanted to do with the function and pass necessary arguments. If we fail we call reject() and pass necessary arguments.
Where promise returns we add two terms .then() and .catch().
.then() is function which is called if promise returns resolve and arguments are passed to then().
.catch() is function which is called if promise returns reject() and arguments returned are passed to reject().