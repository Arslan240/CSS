// ITERATORS

function* ArrayIterator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const ArrayIteratorObject = ArrayIterator([1,2,3,4,5,6,7,8,9,10]);
console.log(ArrayIteratorObject.next());
console.log(ArrayIteratorObject.next());
console.log(ArrayIteratorObject.next());
console.log(ArrayIteratorObject.next());















// INFINITE LOOPS
// it'll create an infinte loop which we can use to create unique id.
// function* generatorFunction(){
//   let id = 1;
//   while (true){
    
//     yield id;
//     id++;
//   }
// }

// const generatorObject = generatorFunction();
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());











// function* generatorFunction(){
//   yield 1;
//   yield 2;
//   yield 3;
// }

// // calling the generator very first time, just creates the generator object and all of it's functions.
// const generatorObject = generatorFunction();
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// const generatorObject2 = generatorFunction();
// console.log(generatorObject2.next());
// console.log(generatorObject2.next());