
let userName = " Bro code ";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));


// remove all white space
userName = userName.trim();
userName = userName.toLowerCase();
userName = userName.toUpperCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(userName);


let fullName = "Bro Code";
let firstName;
let lastName;

let idx = fullName.indexOf(" ");

firstName = fullName.slice(0, idx);
lastName = fullName.slice(idx + 1);

console.log(firstName);
console.log(lastName);


let myNum = 123456.789;


// returns a string with a language sensitive representation of this
myNum = myNum.toLocaleString("en-us");
console.log(myNum); // 123,456.789

myNum = myNum.toLocaleString("hi-IN");
console.log(myNum); // 1,23,456.789

myNum = myNum.toLocaleString("de-DE");
console.log(myNum); // 123.456,789

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD" });
console.log(myNum); // $123,456.79

let degree = 100;

degree = degree.toLocaleString(undefined, {style: "unit", unit: "celsius" });

