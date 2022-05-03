// callback = a function passed as an argument to another function
// Ensures that a function is not going to run before a task is completed
// Helps us develop asynchronous code that helps us to aviod errors and potential problems
sum(2, 3, displayConsole);

function sum(x, y, callback){
	let result = x * y;

	callback(result);
}

function displayConsole(output){
	console.log(output);
}

function displayDOM(output){
	document.getElementById("myLabel").innerHTML = output;
}
