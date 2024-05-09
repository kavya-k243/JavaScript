const myArray=[1,2,3,4]
const myHeroes=["asd", "ewq", "wq"]
const myArray2=new Array(1,2,3)
console.log(myArray[0]);
//array methods
myArray.push(9) //insert
myArray.pop() //last value will be deleted
myArray.unshift(8) //add in starting
myArray.shift() //starting element will be removed
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(3));
const newArray=myArray.join()
console.log(newArray)
console.log(typeof newArray)

//slice n splice --> slice does not include end range, splice manipulates original array and include end range
console.log("A", myArray)
const myn1 = myArray.slice(1,3)
console.log(myn1)
console.log("B", myArray)
const myn2=myArray.splice(1,3)
console.log(myn2)