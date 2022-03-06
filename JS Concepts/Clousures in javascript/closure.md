# Closures

## What is a Closure?
A function along with it's lexical environment forms a closure.
Closure :***Function bundled with its Scope*** / Lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the local variables references and scope of it's parent. Its not just that function alone it returns but the entire closure.

A function  is inside another function (which contains local variables). We can return inner function. And this variable will still be able to access parent's variable.

<code></code>