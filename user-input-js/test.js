

///let username = window.prompt("What's your name?");
///console.log(username);

let username;

document.getElementById("myButton").onclick = ()=>{
	username = document.getElementById("myText").value;
	console.log(username);
	document.getElementById("myLable").innerHTML = "Hello " + username;
}
