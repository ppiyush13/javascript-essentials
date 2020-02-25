# Data Types


## Primitive
Primitives are immutable data type in JavaScript

### 1. null
```js
null
```   

### 2. undefined 
```js
undefined
```  

### 3. boolean
```js
true, false
```

### 4. Number
```js

// Also includes

+Infinity
-Infinity
NaN
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER

```

### 5. Bigint
```js
987654321098765432109876543210n
(10n ** 25n) - (10n ** 24n) 
```

### 6. String
```js
"String !!"
'Another String !!'
`Yet another String !!`
```

### 7.Symbol
```js
const key = Symbol('my_key');

const obj = {
    [key]: 1,
    enum: 2,
    nonEnum: 3
};

console.log(obj[key]); // 1
```

More resources on Symbol:

https://javascript.info/symbol  
https://exploringjs.com/es6/ch_symbols.html  


## Object

Rest everything is object in JavaScript, including functions.

```js

const key = 'name';

const obj = {
    [key]: 'Dan',
};

obj.status = '..';

obj['features'] = '..';

```

## Difference between `parseInt` and `Number`

Number constructor called as function performs type conversion 

```js
Number('123')       // 123
Number('12.3')      // 12.3
Number('12.00')     // 12
Number("1e3")       // 1000
Number('')          // 0
Number('0x11')      // 17
Number('0b11')      // 3
Number('0o11')      // 9
Number('foo')       // NaN
Number('13 days')   // NaN
Number('+100')      // 100
Number('-Infinity') //-Infinity


Number(null)        // 0
Number(undefined)   // NaN
Number(false)       // 0
Number([])          // 0
Number({})          // NaN
Number(NaN)         // NaN
```

parseInt performs parsing.

```js
parseInt('123', 10)   // 123
parseInt('1101', 2)   // 13
parseInt('12.3')      // 12
parseInt('12.00')     // 12
parseInt("1e3")       // 1
parseInt('')          // NaN
parseInt('0x11')      // 17
parseInt('0b11')      // 0
parseInt('0o11')      // 0
parseInt('foo')       // NaN
parseInt('13 days')   // 13
parseInt('+100')      // 100
parseInt('-Infinity') //NaN


parseInt(null)        // NaN
parseInt(undefined)   // NaN
parseInt(false)       // NaN
parseInt([])          // NaN
parseInt({})          // NaN
parseInt(NaN)         // NaN
```


## Array

```js
const numbers = [1, 2, 3];

const alphabets = new Array(26);

new Array(26).fill(undefined); // 1

Array.from(new Array(26)); // 2

[... new Array(26)]; // 3
```

## typeof operator

```js
typeof null // "object" 

typeof undefined // "undefined"

typeof 0 // "number"
typeof Number('1') // "number"
typeof 3.14 // "number"
typeof Infinity // "number"
typeof NaN // "number"

typeof 10n // "bigint"

typeof true // "boolean"
typeof !!5  // "boolean"

typeof "foo" // "string"
typeof (typeof 1) // "string"
typeof String(1) // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object" 
typeof {a: 1} // "object"
typeof new Date() // "object"
typeof /regex/ // "object"

typeof alert // "function"
typeof function() {} // "function"
typeof class C {} // "function"
typeof Math.sin // "function"

```


## instanceof operator
The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

```js
    // Shamelessly copied from MDN. Read it to know more.

let simpleStr = 'This is a simple string'
let myString  = new String()
let newStr    = new String('String created with constructor')
let myDate    = new Date()
let myObj     = {}
let myNonObj  = Object.create(null)

simpleStr instanceof String  // returns false, string literal is not an object
myString  instanceof String  // returns true
newStr    instanceof String  // returns true
myString  instanceof Object  // returns true

myObj    instanceof Object   // returns true, every object literal has Object.prototype as prototype
({})     instanceof Object   // returns true, same case as above
myNonObj instanceof Object   // returns false, prototype is end of prototype chain (null)

myString instanceof Date     // returns false

myDate instanceof Date      // returns true
myDate instanceof Object    // returns true
myDate instanceof String    // returns false
```

## References
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

