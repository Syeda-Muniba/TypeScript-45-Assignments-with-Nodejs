"use strict";
// Exercise 25
let alienColor = "Black";
if (alienColor === "Black") {
    console.log("Alien color is Black Player just earned 5 points.");
}
if (alienColor === "White") {
    console.log("Alien color is White.");
}
// Exercise 26
let alienColor1 = "Blue";
// First Version  
if (alienColor1 === "Blue") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
// Second version
if (alienColor1 === "green") {
    console.log("I am come from If Satement.");
}
else {
    console.log("I am come from Else Statment.");
}
// Exercise 27
// Version 1
let alienColor2 = "orange";
if (alienColor2 === "orange") {
    console.log("(Version 1) you shot down orange alien the player earned 5 points.");
}
else if (alienColor2 === "Pink") {
    console.log("you shot down pink alien the player earned 10 points.");
}
else if (alienColor2 === "Yellow") {
    console.log("you shot down yellow alien the player earned 15 points.");
}
//  Version 2
let alienColour3 = "Pink";
if (alienColour3 === "orange") {
    console.log("you shot down orange alien the player earned 5 points.");
}
else if (alienColour3 === "Pink") {
    console.log("(Version 2) you shot down pink alien the player earned 10 points.");
}
else if (alienColour3 === "Yellow") {
    console.log("you shot down yellow alien the player earned 15 points.");
}
//  Version 3
let alienColour4 = "Yellow";
if (alienColour4 === "orange") {
    console.log("you shot down orange alien the player earned 5 points.");
}
else if (alienColour4 === "Pink") {
    console.log("you shot down pink alien the player earned 10 points.");
}
else if (alienColour4 === "Yellow") {
    console.log("(Version 3) you shot down yellow alien the player earned 15 points.");
}
// Exercise 28
let age = 16;
if (age < 2) {
    console.log("\nYou are a Baby.");
}
else if (age >= 2 && age < 4) {
    console.log("You are a Toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("You are a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("You are a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("You are a Adult.");
}
else if (age >= 65) {
    console.log("You are a Elders.");
}
// Exercise 29
let favourite_fruits = ["Mango", "Strawberry", "Grapes"];
if (favourite_fruits.includes("Mango")) {
    console.log("I really like Mangos");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberry");
}
if (favourite_fruits.includes("Grapes")) {
    console.log("I really like Grapes");
}
if (favourite_fruits.includes("Bananas")) {
    console.log("I really like Bananas");
}
if (favourite_fruits.includes("Cherry")) {
    console.log("I really like Cherry");
}
// Exercise 30
let userName = ["Habiba", "Alishba", "Admin", "Muskan", "Maliha"];
// using forEach Loop on Array
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
});
// Exercise 31
let userNames = ["Habiba", "Alishba", "Admin", "Muskan", "Maliha"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty we need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
// Exercise 32
let current_users = ["Mehak", "Kinza", "Areeba", "Minal", "Laiba"];
let new_users = ["Maira", "zoobia", "Anoosh", "Kinza", "Laiba"];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`sorry ${new_one_user} is already taken:`);
    }
    else {
        console.log(`This username ${new_one_user} is available`);
    }
});
