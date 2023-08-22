console.log('lorem ipsum'.split('')); //=> [ "l", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m" ]
console.log('lorem ipsum'.split(' ')); //=> [ "lorem", "ipsum" ]
console.log('lorem ipsum dolor'.split(' ', 1)); //=> [ "lorem" ]
console.log('lorem\nipsum-dolor'.split(/[-\n]/g)); //=> [ "lorem", "ipsum", "dolor" ]