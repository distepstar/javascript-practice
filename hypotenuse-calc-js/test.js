let a, b, c;

//a = window.prompt("Enter side A");
//a = Number(a);
//b = window.prompt("Enter side A");
//b = Number(b);
//c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//console.log("Side C: " + c);

document.getElementById("submitbutton").onclick = () =>{

	a = document.getElementById("aTextBox").value;
	a = Number(a);
	b = document.getElementById("bTextBox").value;
	b = Number(b);
	
	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

	document.getElementById("cLabel").innerHTML = "Side C: " + c;
}
