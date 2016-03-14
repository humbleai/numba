# numba

Numbas are kind of ranges. Here is an example:

```javascript
var myNumba1 = new Numba(1, 6);
var myNumba2 = new Numba(-4, 3);

console.log(Numbas.add(myNumba1, myNumba2).toString());  // [-3..9]
console.log(myNumba1.multiply(myNumba2).toString()); // [-4..18]

if (myNumba1 > myNumba2) console.log(myNumba1 + ' rules');
if (myNumba1 < myNumba2) console.log(myNumba2 + ' rules'); // [-4..3] rules
```
