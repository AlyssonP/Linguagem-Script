function soma(a, b){
    return a+b;
}; //Declaração

const somaExpression = function (a,b){
    return a+b;
}; //Expression

const somaArow = (a,b) => {return a+b};

var a = 5,
b = 10;
console.log(`Função soma simple: ${a} + ${b} = ${soma(a,b)}.`)
console.log(`Função soma Expression: ${a} + ${b} = ${somaExpression(a,b)}.`)
console.log(`Função soma Arow: ${a} + ${b} = ${somaArow(a,b)}.`)

