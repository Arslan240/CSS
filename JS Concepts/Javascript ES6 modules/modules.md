# ES6 Modules

ES6 modules allow us to use different parts of code from different files. It lets us select only the parts which we want to use. 

## How to use modules?
We use modules by using **export and import**

### What is `export`?
To use a piece of code in other files we export that piece of code. We use `export` keyword to export code.

### How to use `export`?
There are **two types** of export
  * `export default`
  * `export`

  `export default` is the default export. We can only export default only one entity. It'll be exported by default when a certain file is imported.
  > `export default className / function` <br>

`export` standard export is used other than default. It'll not be exported by default. If we want to import it we'll have to import it explicitly.

### What is `import`?