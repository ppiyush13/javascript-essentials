# Variables

## var vs let vs const
 
### 1. Scoping rules
    `var` is scoped to function
    `let` and `const` are scoped to the immediate enclosing block.

    In literal sense, block is nothing but a scope created by `{ }` braces.  
    
    In addition to this, there are 3 more statements which constitute as blocks:  

    1. Block created in catch
    1. Block created in for loops
    1. Block createb by `with` statements (Forget this forever)

    
    Visit this to know how `let` works with `for` loops 

### 2. Hoisting

    `let` and `const` variables are not initialized until their definition is evaluated.
    
    Under the hood, life cycle of variable consists of following phases: 

    1. **Registration phase** is registering a variable in the scope.  

    1. **Declaration phase** is allocating memory and creating a binding for the variable in the scope.  
        At this step the variable is automatically initialized with `undefined`.  

    1. **Assignment phase** is assigning a value to the initialized variable.  
  
  
    `var`, passes the registration phase and the declaration phase right away at the beginning of the scope, before any statements of that scope are executed   
  
    `let`, it passes only registration phase before scope is executed     
    Till then `let` variables are in  **Temporal Dead Zone**  
  

    ```js

        var a; // declaration
        a = 10; // assignment

        var b = 10; // declaration + assignment
    ```


    So technically `let` variables do hoist, but they throw errors when accessed before being declaration.

    https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted/
    http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified



### 3. Creating global object property

    variables created by `var` in global scope ends up on being attached to window object.  
    Same is not true with `let`

    So where global `let` are stored ?
    They live in the scope of an invisible block that notionally encloses all JS code that runs in a web page.

### 4. Redeclaration

    Redeclaring the same variable within the same function or block scope raises a SyntaxError.


## Don't apply shortcuts

    ```js

    (() => {
        {
            let a = b = 10;
        }

        console.log(b); // 10

    })();

    ```


    Though for object property assignment, this is harmless

    ```js

    (() => {
        {
            const obj = {};
            const a = obj.a = 5;
        }
        console.log(obj, a); // ReferenceError

    })()

    ```


## Reference

https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let