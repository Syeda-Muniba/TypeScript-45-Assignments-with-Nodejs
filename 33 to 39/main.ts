// Exercise 33
let Numbers = [1,2,3,4,5,6,7,8,9];

for(let oneNumber of Numbers){
     let oridinalEnding: string;

    if( oneNumber === 1){
        oridinalEnding = "st"
    }
    else if(oneNumber === 2){
        oridinalEnding = "nd"
    }
    else if(oneNumber === 3){
        oridinalEnding = "rd"
    }
    else{
        oridinalEnding = "th"
    }

    console.log(`${oneNumber}${oridinalEnding}`);
}




// Exercise 34
let Pizza = ["Chicken Tikka","Fajita","Malai Cheez"]

for(let onePizza of Pizza){
    console.log(`I like ${onePizza} Pizza`);
}
console.log("Pizza is love")
console.log("Pizza is very Yummy")




// Exercise 35
let petAnimals = ["Cat","Dog","Parrot"]

for(let onePet of petAnimals){
    console.log(` A ${onePet} would make a great pet.`)
}

console.log("Any of these animals would make a great pet!\n")




// Exercise 36
function make_shirt (size: string, printMessage: string){
   console.log(`You selected ${size} size shirt with ${printMessage} prints on shirt`)
}

make_shirt("Medium","Developer")




// Exercise 37
function make_shirt1 (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by-default value
make_shirt1();

// Calling a function now with Medium size and default message
make_shirt1("Medium")

// Calling a function now with small size and also Different print message
make_shirt1("Small", "I Love JavaScript")




// Exercise 38
function describe_city(city: string, country: string = "Pakistan"){
    console.log(`\n${city} is in ${country}`);
}

// Calling the function
describe_city("Karachi");

describe_city("Lahore");

describe_city("Berlin", "Germany")




// Exercise 39
// Creating a function with parameters which return a values in string
function city_country(city: string, country: string) : string{
    return `\n${city} , ${country}`;
}

// Calling the functionand print the return value

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("berlin","Germany"));