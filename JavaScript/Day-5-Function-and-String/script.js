//Function Declaration

add(2, 5)
function add(a, b){
    let sum = a + b;
    console.log(sum)
}
let sum = add(5, 7)
console.log(sum) // 


// Function Expression
// subtract(7, 5); won't work before initialization
const subtract = function(a, b){
    return (a - b);
}
let res = subtract(7, 5);

// Arrow Function

const multiply = (a, b) => {
    let c = (a * b)
    return c
}

let product = multiply(2, 5)

const greet = name => ("Welcome " + name);

let greetString = greet("Anand");

console.log(res, product, greetString)


//Creating String 

let str1 = "Hello" // Double Quote
let str2 = 'World' // single quote

// let str3 = str1 + " " + str2 + " " + "This is a sample text";
let str3 = `${str1} ${str2} ${subtract(7, 5)} "This is a sample text World"`;

// Length Property

console.log(str3.length)

// String Functions
// Change Case

console.log(str3.toLowerCase()) // for Lowercase Characters
console.log(str3.toUpperCase()) // for Uppercase Characters


// charAt(index) // find character on specific 0 based index

console.log(str3.charAt(4))
console.log(str3.charAt(0))

// Concatinating 

console.log(str1.concat(" ", str2))

//Sub string
console.log(str3.substring(0, 5))
console.log(str3.substring(6, 11))
console.log(str3.substring(11, 6)) // if endIndex < strartIndex it swaps the indexs

// Slice Method
console.log(str3.slice(11, 6)) // if endIndex < strartIndex it returns empty string


// Includes

console.log(str3.includes("the")) // will return false 
console.log(str3.includes("Hel")) // will return true 

// Replace
console.log(str3.replace("World", "Anand")) // Will replace first one only
console.log(str3.replaceAll("World", "Anand")) // will replace all 

// Trim

console.log("          Hello     World            ")
console.log("          Hello     World            ".trim())

// Split

console.log("Anand, Yuvraj, Suman, Aditya".split(", "))
console.log("Anand, Yuvraj, Suman, Aditya".split(""))
console.log("Anand, Yuvraj, Suman, Aditya".split()) // ["Anand, Yuvraj, Suman, Aditya"]