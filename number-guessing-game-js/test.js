let guessNum, randNum;

randNum = Math.floor(Math.random() * 100 + 1);
console.log(randNum);

document.getElementById("submitBtn").onclick = () => {
	guessNum = document.getElementById("guessInput").value;
	let ansLabel = document.getElementById("answerLabel");
	

	if(guessNum == randNum){
		ansLabel.style.display = "block";
		ansLabel.innerHTML = `Your guess is correct, the number is ${randNum}!`;
	}else{
		ansLabel.style.display = "block";
		ansLabel.innerHTML = `Your guess not correct, try again!`;
		setTimeout(() => {
			ansLabel.style.display = "none";
		}, 2000);
	}
}

