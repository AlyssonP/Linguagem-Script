const n1 = 10;
const n2 = 5;
const operator = "+";
let result;

//Condição com Switch
switch (operator) {
    case "+":
        result = n1 + n2;
        break;
    case "-":
        result = n1 - n2;
        break;
    default:
        result = "Invalid operator"
}

console.log(`${n1} ${operator} ${n2} = ${result}`)