var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  Making a array of places and print its original order
var countriestoVisit = ["Saudia", "Switzerland", "Korea", "Turki", "Europe"];
console.log("original order", countriestoVisit);
// Print the Array in Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriestoVisit, true).sort());
// Show that thearray is still in its original order
console.log("still in Original Order:", countriestoVisit);
//  Print the Array in Reverse Order without modifying the actual array list 
console.log("Reverse Order:", __spreadArray([], countriestoVisit, true).reverse());
// Show that thearray is still in its original order again
console.log("still in original order:", countriestoVisit);
// We have changed the Original Array Order Now
console.log("Original Array Reversed:", countriestoVisit.reverse());
// Print the array to show that its back to original order
console.log("Back to Original Order:", countriestoVisit.reverse());
// Print the Arrat to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabteical Order:", countriestoVisit.sort());
// We have changed the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriestoVisit.reverse());
