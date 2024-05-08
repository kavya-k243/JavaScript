// Stack(primitive), heap(non primitive)
let youtubeName="kavya"  //stack
let anotherName=youtubeName
anotherName="khandelwal"
console.log(youtubeName)
console.log(anotherName)

let userOne={                    //heap both values would be changed
    email: "ac@hn.com",
    upi: "zs@kn.com"
}
let userTwo = userOne
userTwo.email="fd@hr.com"
console.log(userOne.email)
console.log(userTwo.email)