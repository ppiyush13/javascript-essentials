# Type Conversion

## Truthy and falsy values

Truthy values  
```js

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

```

Falsy values
```js

if (false)
if (null)
if (undefined)
if (0)
if (0n)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)

```

Why document.all is *falsy* ?  
https://stackoverflow.com/questions/10350142/why-is-document-all-falsy/10394873#10394873

  

##  Logical `&&` and `||` operators

| Operator | Syntax | Description |
| --- | --- | --- |
| Logical AND (&&) | expr1 && expr2 | If expr1 can be converted to true, returns expr2; else, returns expr1. |
| Logical OR &#124; &#124; | expr1 &#124; &#124; expr2 | If expr1 can be converted to true, returns expr1; else, returns expr2. |
| Logical NOT (!) | !expr | Returns false if its single operand can be converted to true; otherwise, true. |

```js
false || 'Mat' === 'Mat'
true || Number('1e3') === true   

false && 'Mat' === false
true && Number('1e3') === 1000
```

  

## `==` vs `===` operators 

The difference between == and === is that:

* == converts the variable values to the same type before performing comparison.   
This is called type coercion.
* === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.


<table class="standard-table" style="height: 944px; width: 892px;">
 <caption>Sameness Comparisons</caption>
 <thead>
  <tr>
   <th scope="col" style="text-align: center;">x</th>
   <th scope="col" style="text-align: center;">y</th>
   <th scope="col" style="width: 10em; text-align: center;"><code>==</code></th>
   <th scope="col" style="width: 10em; text-align: center;"><code>===</code></th>
   <th scope="col" style="width: 10em; text-align: center;"><code>Object.is</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>undefined</code></td>
   <td><code>undefined</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>null</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>'foo'</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>-0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
  <tr>
   <td><code>-0</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>'0'</code></td>
   <td><code>0</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>'17'</code></td>
   <td><code>17</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>[1, 2]</code></td>
   <td><code>'1,2'</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>'foo'</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>undefined</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>undefined</code></td>
   <td><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>{ foo: 'bar' }</code></td>
   <td><code>{ foo: 'bar' }</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>new String('foo')</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>null</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>NaN</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>NaN</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td><code>NaN</code></td>
   <td><code>NaN</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(255, 144, 144); text-align: center;"><code>false</code></td>
   <td style="background-color: rgb(144, 255, 144); text-align: center;"><code>true</code></td>
  </tr>
 </tbody>
</table>


Comparision table for `==` and `===` operator can be found [here][js_equality_table] 

  
  
## ES6 `Object.is()` function 

`===` is not perfect. It has little quirk which confuses developer. 

```js
+0 === -0    // true 
NaN === NaN  // false
```

So in order to overcome above scenarios, ES6 has introduced new function for strict checking  

```js
Object.is(13, "13");    // false
Object.is(1e3, 1000);   // true

// Ofcourse it fixes the quirks of ===
Object.is(+0, -0));   // false
Object.is(NaN, NaN)); // true
```

## References

https://codeahoy.com/javascript/2019/10/12/==-vs-===-in-javascript/



[js_equality_table]: https://dorey.github.io/JavaScript-Equality-Table/