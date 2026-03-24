// let marks = prompt("Please Enter the marks obtained")

// if(marks >= 90){
//     console.log("A Grade")
// }
// else if(marks>=75){
//     console.log("B Grade")
// }
// else if(marks >= 50){
//     console.log("C Grade")
// }
// else if(marks >= 33){
//     console.log("D Grade")
// }else{
//      console.log("Failed")
// }

// const fruit = prompt("Enter your favourite Fruit");

// switch (fruit){
//     case "Apple":
//         console.log("Your favourite fruit is Apple");  
//         break     
//     case "Orange":
//         console.log("Your favourite fruit is Orange");
//         break
//     case "Grapes":
//         console.log("Your favourite fruit is Grapes");
//         break
//     default:
//         console.log("Please Enter a Fruit Name");
// }


// for(let i = 1; i <= 10; i++){
//     console.log(2 * i)
// }

// let i = 1;
// while(i <= 10){
//     console.log(2 * i)
//     i++;
// }

// let j = 1;
// do{
//     console.log(2 * j);
//     j++;
// }while(j >= 10);


let fruits  = ['Apple', "Banana", "Grapes", "Orange"];

for(const fruit of fruits){
    console.log(fruit)
}

fruits.forEach(function(fruit, i){
    console.log(fruit, i)
})