const score =100;
console.log(score);

const value = new Number(200);
console.log(value);

console.log(value.toString().length);
console.log(value.toFixed());

const otherValue=2346.33424233;
console.log(otherValue.toPrecision(4)) // value should be more or equal than digits ahead of decimals


const balance= 12839307403;
console.log(balance.toLocaleString());  // give number as string in us number format like 1,000,000
console.log(balance.toLocaleString('en-IN')); // same but in india format like 1,00,000


/**************** Maths ********************/

console.log(Math.abs(-5))
console.log(Math.round(4.7))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.6))
console.log(Math.min(2,4,7,1,3))
console.log(Math.max(2,6,3,1,5))
console.log(Math.pow(2,6))


//important 

console.log(Math.random());

// find value betweeen 0-9
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

//find value between 1-6

console.log(Math.floor(Math.random()*10)%6 + 1) //1 bcoz value should be atleast 1


//find value between 10-20

console.log(Math.floor(Math.random()*100)%10 + 10)

//find value between 0-20
console.log(Math.floor(Math.random()*100) % 21) // includes 20 so 