let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;


console.log(sum(a, b, c, d, e));


// With spread operator, it will pack all the parameters into a array
function sum(...numbers){
	let total = 0;
	for(let number of numbers){
		total += number;
	}

	return total
}
