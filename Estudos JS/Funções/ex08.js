//Parâmetro Rest
function addition(...p) {
    let summation = 0;
    for (let v of p) {
        summation += v;
    };
    return summation;
}

console.log(addition(1)); //=> 1 ([1])
console.log(addition(1,1)); //=> 2 ([1,1])
console.log(addition(1, 1, 1, 1)); //=> 4 ([1, 1, 1, 1])