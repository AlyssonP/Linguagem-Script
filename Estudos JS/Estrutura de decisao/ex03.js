const n1 = 10;
const n2 = 5;
const operator = "+";

var result = operator === '+' ? n1 + n2: operator === '-'? n1-n2 : "Invalid operator";
console.log(`${n1} ${operator} ${n2} = ${result}`);
