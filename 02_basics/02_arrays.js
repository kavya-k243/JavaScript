const marvel_heroes = ["as", "ws", "aw"]
const dc_heroes = ["lk", "eg", "zx"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1]);
marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes)

const all_heroes = marvel_heroes.concat(dc_heroes) //gives a new array
console.log(all_heroes)
//spread
const all_new_heroes=[...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))
