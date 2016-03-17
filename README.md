# numba

Numbas are kinda ranges. Here is an example:

```javascript

var myNumba1 = new Numba(1, 6); // [1..6]
var myNumba2 = new Numba(-4, 3); // [-4..3]

console.log(Numbas.add(myNumba1, myNumba2).toString()); 
// [-3..9]

console.log(myNumba1.multiply(myNumba2).toString()); 
// [-4..18]

if (Numbas.gte(myNumba1, myNumba2)) console.log(myNumba1 + ' is greater than or equal to ' + myNumba2); 
// [-4..18] is greater than or equal to [-4..3]

if (Numbas.in(myNumba2, myNumba1)) console.log(myNumba2 + ' is in ' + myNumba1); 
// [-4..3] is in [-4..18]

console.log(myNumba1.add(1).toString()); 
// [-3..19]

console.log(myNumba1.diff()); 
// 22

myNumba2.min = Number.NEGATIVE_INFINITY;
myNumba2.max = Number.POSITIVE_INFINITY;

console.log(myNumba2.toString()); 
// [-Infinity..Infinity]

```
