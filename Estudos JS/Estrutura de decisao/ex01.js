const n1 = 10;
const n2 = 5;
const operator = "+";
let result;

if (operator === "+") {
    result = n1 + n2;
} else if (operator === '-') {
    result = n1 + n2;
} else {
    result = "Invalid operator";
}

console.log(`${n1} ${operator} ${n2} = ${result}`)