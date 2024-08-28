// if

let color;
if(mode === "dark-mode"){
    color = "black"
}

let age = 18;
if (age >=18) {
    console.log("can vote")
}

if (age < 18){
    console.log("can't vote")
}


// if-else

let colour;
if(mode === "dark-model"){
    color = 'black';
}
else{
    color = 'white';
}

// odd or even number

let num = 20;

if(num % 2 === 0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}

//else-if

let age =43;
if (age <18){
    console.log("Junior")
}
else if(agwe > 60){
    console.log("senior")
}
else{
    console.log("middle")
}


// ternary operators

age >18? "true":"false";

// example
let namee = prompt("hello");
console.log(namee)

// user input
let num = prompt("enter a number:");

if (num % 5 === 0){
    console.log(num, "is a multiple of 5");
}
else{
    console.log(num, "is not a multiple of 5")
}

// code whoch give grades to students according to their scores;

let score;
if(score >= 80 && score <= 100){
    console.log("A")
}
else if(score >=70 && score <= 89){
    console.log("B")
}
else if(score >=60 && score <= 69){
    console.log("c")
}
else{
    console.log("D")
}