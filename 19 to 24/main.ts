// Exercise 19
let guestList =  ["Humna", "Yamna", "Fabiha", "Muniba"];

let numofGuests: number = guestList.length;

console.log(`We are Inviting total ${numofGuests} guests.`);




// Exercise 20
// Making a Favourite Colour Array List
let favColour: string[] = ["Black","Brown","Blue","Mehroon"]

// Print the message of List
console.log("List of Favourite Colour:");

// Print the values of Array in the form of List 
favColour.forEach(colour => console.log(colour));




// Exercise 21
// TypeScript Object
interface itCourse {
        courseName: string;
        location: string;
        onsiteStudents: number;
}

let itCourse = {
    courseName: "Typescript and Javascript",
    location: "Governor House Sindh",
    onsiteStudents: "50000"
};

console.log(itCourse);




// Exercise 22
// Creating a Array
let errorArray: string[] = ["A","B","C","D"];

// Producing Error! by Accessing invalid index of array
console.log(errorArray[10]);

// Error Removed
console.log(errorArray[1]);




// Exercise 23
// Making a Variable
let five = 5;

let ten = 10;

// Test 1                   // \n is used to space 
console.log("\nTest 1: five is equal to 5?");
console.log(five == 5);

// Test 2
console.log("\nTest 2: ten is equal to 10?");
console.log(ten == 10);

// Test 3
console.log("\nTest 3: five is not equal to 5?");
console.log(five != 5);

// Test 4
console.log("\nTest 4: 10 is greater than 5");
console.log(10 > 5);

// Test 5
console.log("\nTest 5: 5 is samller than 10");
console.log(5 < 10);

// Test 6
console.log("\nTest 6: 10 is samller than 5");
console.log(10 < 5);

// Test 7
console.log("\nTest 7: 5 is equal to 10");
console.log(ten == five);

// Test 8
console.log("\nTest 8: 10 is equal to 10");
console.log(ten == ten);

// Test 9
console.log("\nTest 9: 5 is greater than 10");
console.log(five > ten);

// Test 10
console.log("\nTest 10: 100 is smaller than 10");
console.log(100 < 10);




// Exercise 24
// Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let Ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];


// Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("Is apple is not equal to apple?");
console.log(apple != "apple");


// Tests Using Lower Case Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");


// Numerical Tests
// Equal to
console.log("\n Is Ten is equal to twenty?");
console.log(Ten == twenty);

// not Equal to 
console.log("\n Is Ten is not equal to twenty?");
console.log(Ten != twenty);

// Greater than
console.log("\n Is Ten is greater than twenty?");
console.log(Ten > twenty);

// Less than 
console.log("\n Is Ten is Less than twenty?");
console.log(Ten < twenty);

// Greater than or  Equal to
console.log("\n Is Ten is greater than or equal to twenty?");
console.log(Ten >= twenty);

//Less than or Equal to
console.log("\n Is Ten is Less than or Equal to twenty?");
console.log(Ten <= twenty);


//Test using   "and &&" & "or ||" operators 

//  usnig &&  (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// using ||  (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);


// Test whether an item is include in array 
console.log("\nIs Orange not include in my fruits array");
 console.log(fruits.includes("orange"));
 




