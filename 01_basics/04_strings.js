const myName="sourabh"
const myAge=21
console.log("my name is "+ myName +" and age is "+ myAge);
console.log(`my name is ${myName} and my age is ${myAge}`); 

const gameName = new String('Sourabh-sc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice( -5, 13)
console.log(anotherString);

const newStringOne = "   Sourabh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Sourabh.com/Sourabh%20agrawal"

console.log(url.replace('%20', '-'))

console.log(url.includes('jain'))

console.log(gameName.split('-'));