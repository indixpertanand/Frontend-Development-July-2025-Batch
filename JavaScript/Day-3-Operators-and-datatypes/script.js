let a = 10
let b = 12
let c

a += b // a = a + b
c = a + b
console.log(a, b)


a -= b  // a = a - b
console.log(a, b)

a *= b  // a = a * b
console.log(a, b)

let d = null
let name = 'Anand';
let arr = [a, d, name]
function abc(){
    console.log('abc')
}

console.log(typeof a, typeof d, typeof name, typeof arr, typeof abc)
let age = prompt("enter your age")

console.log(age >= 18 ? 'Adult' : 'Minor');

if(age >= 18 && age <= 55){
    console.log('Eligible to join')
}

