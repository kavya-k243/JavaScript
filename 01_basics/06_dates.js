let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)
let myCreatedDate = new Date(2023,2,23)
console.log(myCreatedDate.toDateString());
let newCreatedDate = new Date(2023,2,23,5,3)
console.log(newCreatedDate.toLocaleString());