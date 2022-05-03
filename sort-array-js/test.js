let fruits = ["banana", "apple", "orange", "mange"];

// function approach
//fruits = fruits.sort();
//fruits = fruits.sort().reverse;


for(let fruit of fruits){
	console.log(fruit);
}

// Selection Sort
function sortStringArray(arr){
	let min;
	for(let i = 0; i < arr.length; i++){
		min = i;

		for(let j = i + 1; j < arr.length; j++){
			if(arr[j].charAt(0).charCodeAt(0) < arr[min].charAt(0).charCodeAt(0)){
				min = j;
			}
		}

		if(min !== i){
			[arr[i], arr[min]] = [arr[min], arr[i]];
		}
	}
}

// Merge sort
function sortStringArray2(arr){
	const half = arr.length / 2;

	if(arr.length <= 1){
		return arr;
	}


	const left = arr.splice(0, half);
	const right = arr;
	return merge(sortStringArray2(left), sortStringArray2(right));
}

function merge(left, right){
	let sortedArr = [];

	while(left.length && right.length){
		if(left[0].charAt(0).charCodeAt(0) < right[0].charAt(0).charCodeAt(0)){
			sortedArr.push(left.shift());
		}else{
			sortedArr.push(right.shift());
		}
	}

	return [...sortedArr, ...left, ...right];
}

fruits = sortStringArray2(fruits)
console.log(fruits);
