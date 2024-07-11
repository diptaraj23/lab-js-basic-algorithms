
console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "John"
console.log("The Driver's name is " + hacker1);
let hacker2 = "Robert"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength){
    console.log(`The driver has the longest name, it has ${driverLength} characters`);
}
else if (driverLength < navigatorLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
    }
else{
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}



// Iteration 3: Loops
/* 3.1 Print all the characters of the driver's name, separated by a space and in capitals
i.e. "J O H N" */
let result = ""
for (let i=0; i<driverLength; i++){
    result += hacker1[i].toUpperCase();

    if(i<driverLength-1)
        result+=" ";
}

console.log(result);

// 3.2 Print all the characters of the navigator's name, in reverse order.
result = ""
for(let i=hacker2.length-1;i>-1;i--){
    result += hacker2[i];
}
console.log(result);


/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.

Yo, the navigator goes first definitely.

What?! You both have the same name?*/



if(hacker1<hacker2){
    console.log("The driver's name goes first.");
}
else if (hacker2<hacker1){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}
