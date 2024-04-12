// Exercise 12
let friendsName = ["Humna", "Yamna", "Fabiha", "Muniba"];

friendsName.forEach(friendname => console.log(`Hello ${friendname}, How are you`));





// Exercise 13
let transportationModes = ["Sport Bike", "Audi", "Car", "Sport Car"];

transportationModes.forEach(mode => console.log(`“I would like to own a ${mode}`));





// Exercise 14
let guestList1 =  ["Humna", "Yamna", "Fabiha", "Muniba"];

guestList1.forEach(oneGuest => console.log(`Salam ${oneGuest}, would you like to dinner with me?`));





// Exercise 15
let guestList2 =  ["Humna", "Yamna", "Fabiha", "Muniba"];

let dontCome = guestList2[0];

console.log(dontCome, "nahi askti");

guestList2.splice(0, 1, "areesha");

guestList2.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));





// Exercise 16

// Creating a Guest List Array
let guestList3 =  ["Hafsa", "Yamna", "Fabiha", "Muniba"];

// Making variable for those guest who cant come
let donotCome = guestList3[0];

// Print the name of guest who cant come
console.log(donotCome, "nahi askty hen");

// Ad or Remove values from Guest List Array
guestList3.splice(0, 1, "Humna");

// Message for print for Bigger Table 
console.log("Good News ! we have found a Bigger Table for dinner.");

// Adding a new value at starting index of array
guestList3.unshift("Zainab");

// Adding a new guest at ending index of array
guestList3.push("Areesha");

// Get a middle index of our guest list array 
let middleIndex: number = Math.floor(guestList3.length / 2);

// Adding a new guest to middle index of array 
guestList3.splice(middleIndex, 0, "Aniqa")

// Print message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with thier names 
guestList3.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));



  

// Exercise 17

// Creating a Guest List Array
let guestList4 =  ["Hafsa", "Yamna", "Fabiha", "Muniba"];

// Making variable for those guest who cant come
let cantCome = guestList4[0];

// Print the name of guest who cant come
console.log(cantCome, "nahi askti he");

// Ad or Remove values from Guest List Array
guestList4.splice(0, 1, "Humna");

// Message for print for Bigger Table 
console.log("Good News ! we have found a Bigger Table for dinner.");

// Adding a new value at starting index of array
guestList4.unshift("Zainab");

// Adding a new guest at ending index of array
guestList4.push("Areesha");

// Get a middle index of our guest list array 
let middleindex: number = Math.floor(guestList4.length / 2);

// Adding a new guest to middle index of array 
guestList4.splice(middleindex, 0, "Aniqa")

// Print message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with thier names 
guestList4.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));

//  Inform that only two guests can be invited for dinner 
console.log("Unfortunately , the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestList4.length > 2){
    let removedGuest = guestList4.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

// Sending a invitation to the last two guest on the list 
console.log("Invitation to the last 2 Guests");
guestList4.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));


// Removing last two Guest from the list
guestList4.pop();
guestList4.pop();

console.log("Empty List:", guestList4);


