// Compuertas lógicas:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )


// Comparadores lógicos
var n = 5;
n === "5"
// mayor que: a > b
// menor que: a < b
// mayor igual que: a >= b
// menor igual que: a <= b
// igual que: a == b
// no es igual: a != b

console.log('Z' > 'A');
console.log('2' > 1);
console.log('01' === 1);
console.log(true == 1);
console.log(false == 0);
console.log(0 === false);

alert( null > 0 ); /// (1) false
alert( null == 0 ); /// (2) false
alert( null >= 0 ); // (3) true

// El valor undefined no debe compararse con otros valores:
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)