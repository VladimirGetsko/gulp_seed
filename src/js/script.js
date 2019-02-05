let random;

do {
	random = Math.floor((Math.random() * 10) + 5);
	console.log(random);
} while(random !== 7);

console.log(random, 'cheers');