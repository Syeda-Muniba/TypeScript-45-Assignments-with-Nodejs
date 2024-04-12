// Exercise 40
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

return album;

}

// Calling three functions and creating three variables with different balues

let album1 = make_album("Mia", "Album title 1");

let album2 = make_album("Muniba","Album title 2");

// Calling a make_album function with third parameter
let album3 = make_album("Fatima","Album title 3", 12);

// Calling the Variables

console.log(album1);
console.log(album2);
console.log(album3);




// Exercise 41
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Define an array containing magicians name
let magician_names = ["Harry Porter","Mia","Muniba"]

// Call tha function to print each magician name
show_magicians(magician_names);




// Exercise 42
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => ` The Great ${name}`)
}

let magician_name =["Harry Porter","Muniba","Usman"]

// Call make_great function to modify magicians names 
let great_magicians = make_great(magician_name);

// Call show_magicians that show modified list of magicians
show_magicians(great_magicians)




// Exercise 43
function shows_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function makes_great(magicians: string[]){
    return magicians.map(name => ` The Great ${name}`)
}

let magicians_name =["Harry Porter","Muniba","Usman"]

// Making a copy of Original array through  .slice() function
let copy_magician_names= magician_name.slice();

// Modified the copied array to include "The Great" with thier names
let copy_great_magicians = makes_great(copy_magician_names);

// Show both arrays original and copied

// original
console.log("\nOriginal Array\n")
show_magician(magician_name);

// Copied 
console.log("\ncopied Array\n")
show_magician(copy_great_magicians);




// Exercise 44
// Define a Function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    
    items.forEach(singleItem => console.log("-" + singleItem)); 

    console.log("\nNow Enjoy sandwich");
}

// Call the function 3 ties with 3 different number of arguments
makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("bread","butter","Ketchup","Chicken","Mayo","Cheese","Tomato","Onion","Chutney");




// Exercise 45
function create_car(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

// Add additional options to the car object
options.forEach(option =>{
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});

     return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota","Corolla", "color: Black", "Sunroof: True");

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);

