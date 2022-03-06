# Lexical 

## What is lexical?
Lexical means 'in heirarchy' 'in order'. We have func2() inside func1() then func2() is lexically inside func1(). The parent scope is lexical concept.

><code>function func1() {  function func2(){}  }</code>

When a function is called, an **execution environment context** is created. Every execution ec contains variables of that scope and reference to it's parent's lexical scope. In this way, the inner function has access to parent's variables and to everything parent has access.

## What is Scope Chaining?
When inner function's access is to it's own scope, it's parent's scope and like this it goes. This chaining of scope is called is Scope Chaining.
When we don't find a variable in `func2()` scope, we move upto find it in the scope of `func1()` scope, if we don't find it there either we'll move to the **global scope**.

## What is Lexical Environment of something?
Lexical environment of something includes following,
  * Local variables
  * Local functions
  * Reference to the parent's Lexical environment / parent's scope.

  *Note: When we are in global scope then there is no parent so there is no parent's reference.*