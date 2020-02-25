# Functions
Every function in JavaScript is a `Function` object  

## 1. Function declaration vs expression  

Declaration: 
```js
function square(number) {
    return number * number;
}
```

> Arrow functions cannot be defined with declaration.

Expression: 
```js
var square = function(number) {
    return number * number;
};

var getName = () => 'JacaScript'; 
```

## 2. Function hoisting  

Remember, for every entity in JS there are 3 phases in its life cyle:  
1. **Registration phase** is registering a variable in the scope.  

1. **Declaration phase** is allocating memory and creating a binding for the variable in the scope.  
    At this step the variable is automatically initialized with `undefined`.  

1. **Assignment phase** is assigning a value to the initialized variable. 


*Function declaration*: 
For declared functions, all three phases are completed on encountering a block.

*Function expression*:
For functional expressions, its hoisting is determined by the type of which to which it is assigned.

## 3. IIFE (Immediately Invoked Function Expression)

Example:

```js

(() => {

    console.log('IIFE expression');

})();

(() => {

    console.log('Another IIFE expression');

}());

```

## 4. Functions as class or object creator

```js

(() => {

    function Language(name, features) {
        this.name = name;
        this.features = features;

        this.getFeatures = () => {
            return this.features;
        };

    }

    Language.prototype.getName = function() {
        return this.name;
    };


    const js = new Language('JavaScript');
    const es = new Language('ECMAScript');

    console.log(js.getName === es.getName); // true
    console.log(js.getFeatures === es.getFeatures); // false

})();
```

In above, `getName` is attached to prototype of Language function. So for every object, this single function will be shared.  
Whereas, `getFeatures` is attached to instance. So it will be assigned to every object instance.

## 5. Difference between traditional function vs Arrow function

There are three difference between normal function and arrow function:

1. Lexical `this` and `arguments`
Value of `this` and `arguments` is referred from the closet non-arrow function.  
    
In order to access arguments in arrow function, use `...args` as parameters  

2. Arrow functions are not constructible ie. cannot be called with new operator  
  
Below example will throw `TypeError`  

```js
(() => {
    
    const Student = (name) => {
        this.name = name;
    };


    const student = new Student('Piyush');
    console.log(student.name);

})();
```

3. No duplicate named parameter. 

```js
(() => {

    {

        function format(a, a) {
            console.log(a); // 13
        }

        format(5, 13);

    }

    {

        const format = (a, a) => {
            console.log(a); // SyntaxError: Duplicate parameter name not allowed in this context
        }

        format(5, 13);

    }

})();
```

## 6. Why `this` is misleading in JavaScript?

1. Passing functions as parameters.  

functions are objects in JavaScript. So they can be passed as arguments.

If function of object is assigned to another variable, then traditional function loses its `this` definition. 

```js
(() => {
    function Student(name) {
        this.name = name;

        this.getName = function() {
            return this.name;
        }
    };

    const student = new Student('Alan');
    console.log(student.getName()); // Alan

    const fnReference = student.getName;
    console.log(fnReference()); // this is pointing to global object or window in case of browser
})();
```

2. function.bind()

function's `this` value could be set externally, using bind function

```js

(() => {

    function Student(name) {
        this.name = name;

        this.getName = function() {
            return this.name;
        }
    };

    const student = new Student('Douglas Crockford');
    console.log(student.getName()); // Douglas Crockford

    const fnReference = student.getName;
    const boundedFunction1 = fnReference.bind(student);
    console.log(boundedFunction1()); // Douglas Crockford


    const boundedFunction2 = fnReference.bind({
        name: 'Brendan Eich',
    });
    console.log(boundedFunction2()); // Brendan Eich

})();
```

3. `call` and `apply`

functions' `this` reference can be set while call a function.

```js

(() => {

    function Student(name) {
        this.name = name;

        this.getFullName = function(salutation) {
            return salutation + ' ' + this.name;
        }
    };

    const student = new Student('Tim Berners Lee');
    console.log(student.getFullName('Mr.')); // Mr. Tim Berners Lee

    const fnReference = student.getFullName;
    console.log(fnReference('Mr.')); // Undefined

    const anotherStudent = new Student('John Resig');
    console.log(fnReference.call(anotherStudent, 'Mr.')); // Mr. John Resig
    console.log(fnReference.apply(anotherStudent, ['Dr.'])); // Dr. John Resig
    
    console.log(fnReference.apply({
        name: 'Ryan Dahl',
    },[
        'Mr.',
    ])); // Mr. Ryan Dahl

})();
```


`call` and `apply` does not works with arrow functions.

Because of following reasons we should always use arrow functions:

    * Since value of this is underterministic in JavaScript.  
    * It does not allows conducting static code analysis.  
    * Tree-Shaking cannot be done properly.  


## Bonus
Equipped with knowledge of `functions` and `this`, can you write a code to create a object without using `new` operator.

<details>
<summary>
    Answer
</summary>

```js
(() => {

    function newOperator(proto, ...args) {
        const obj = Object.create(Student.prototype); 
        const returnValue = Student.apply(obj, args);
        return returnValue && (typeof returnValue === 'function' || typeof returnValue === 'object')
            ?  returnValue
            : obj;
    }

    function Student(name) {
        this.name = name;    
    }

    // our newOperator function, which mimics behavior of new operator
    console.log(newOperator(Student, '13'));
    
    // js new operator
    console.log(new Student("89"));

})();

```
</details>



References:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
https://www.taniarascia.com/this-bind-call-apply-javascript/
