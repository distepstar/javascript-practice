let firstName = "Bro";
let age = 21;
let isStudent = false;

if(age < 21){
	isStudent = true;
} 


console.log(firstName, age, isStudent);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled " + isStudent;
