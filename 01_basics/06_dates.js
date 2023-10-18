let myDate= new Date()

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());


let myCreatedDate= new Date(2023,0,26); // month starts with 0
console.log(myCreatedDate.toLocaleString());
let myCreatedDate2= new Date(2023,0,26,5,46);
console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3= new Date("2023-01-26"); // if we do like this then month start with 1
console.log(myCreatedDate3.toLocaleString()); 


let myCreatedDate4 =new Date("01-26-2023"); // if we do like this then month start with 1
console.log(myCreatedDate4.toLocaleString()); 

