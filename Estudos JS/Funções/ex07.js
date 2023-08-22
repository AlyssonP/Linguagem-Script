//Parâmetro Default
function addition(p1, p2 = 0) {
    return p1 + p2;
};

console.log(addition(1)); //=> 1
console.log(addition(1,2)); //=> 3