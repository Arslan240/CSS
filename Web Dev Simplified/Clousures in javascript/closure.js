function a(){
  let a = 59;
  const b = 44;

  function c(){
    console.log(a,b, a+b);
    // this func will have access to a and b even after it's returned,
    // because when we return inner function, it'll be returned as a closure 
    // which contains local scope and lexical scope of it's parent.
  }
  return c; 
}

console.log(a()); // a returns function c()
const returnedFunc = a(); //as a returns c()
returnedFunc();  //we are calling which is declared as c() before but the variables it's printing are not in it's direct scope, rather it's in it's lexical parent's scope.

// Closures are very important and are used widely in 
// iterators, react etc. We are using them but we don't realize it.