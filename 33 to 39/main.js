// Exercise 33
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var oneNumber = Numbers_1[_i];
    var oridinalEnding = void 0;
    if (oneNumber === 1) {
        oridinalEnding = "st";
    }
    else if (oneNumber === 2) {
        oridinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        oridinalEnding = "rd";
    }
    else {
        oridinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(oridinalEnding));
}
// Exercise 34
var Pizza = ["Chicken Tikka", "Fajita", "Malai Cheez"];
for (var _a = 0, Pizza_1 = Pizza; _a < Pizza_1.length; _a++) {
    var onePizza = Pizza_1[_a];
    console.log("I like ".concat(onePizza, " Pizza"));
}
console.log("Pizza is love");
console.log("Pizza is very Yummy");
// Exercise 35
var petAnimals = ["Cat", "Dog", "Parrot"];
for (var _b = 0, petAnimals_1 = petAnimals; _b < petAnimals_1.length; _b++) {
    var onePet = petAnimals_1[_b];
    console.log(" A ".concat(onePet, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!\n");
// Exercise 36
function make_shirt(size, printMessage) {
    console.log("You selected ".concat(size, " size shirt with ").concat(printMessage, " prints on shirt"));
}
make_shirt("Medium", "Developer");
// Exercise 37
function make_shirt1(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a function with by-default value
make_shirt1();
// Calling a function now with Medium size and default message
make_shirt1("Medium");
// Calling a function now with small size and also Different print message
make_shirt1("Small", "I Love JavaScript");
// Exercise 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country));
}
// Calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
// Exercise 39
// Creating a function with parameters which return a values in string
function city_country(city, country) {
    return "\n".concat(city, " , ").concat(country);
}
// Calling the functionand print the return value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("berlin", "Germany"));
