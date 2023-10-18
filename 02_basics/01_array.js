const myArr=[12,2,3,3,4]
const heros=[ "batman", "superman" , "hulk"]
const myArr2=new Array(1,2,3,4)
const myarr3=[1,2,34,5,"hero","sourabh"]
console.table([myArr,heros,myArr2,myarr3])

heros.push("ironman")  //insert at last
heros.push("shaktiman")
heros.pop() // removes last element
console.log(heros)
console.log(heros[3])

heros.unshift("spiderman")  // shift everything 1 step and insert value at front // it is time consuming
console.log(heros)


heros.shift() // removes from front and shift everything 1 step
console.log(heros)