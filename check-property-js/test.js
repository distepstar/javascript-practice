document.getElementById("submitBtn").onclick = () =>{
	const checkBox = document.getElementById("myCheckBox");
	const visaBtn = document.getElementById("visaBtn");
	const mastercardBtn = document.getElementById("mastercardBtn");
	const paypalBtn = document.getElementById("paypalBtn");

	if(checkBox.checked){
		console.log("You are subscribed");
	}else{
		console.log("You are not subscribed");
	}

	if(visaBtn.checked){
		console.log("You are paying with a Visa!");
	}else if(mastercardBtn.checked){
		console.log("You are paying with a MasterCard!");
	}else if(paypalBtn){
		console.log("You are paying with a Paypal!");
	}else{
		console.log("You must select a payment type!");
	}
}


