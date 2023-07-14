"use strict";
// QUESTION-29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "banana", "mango"];
if (favorite_fruits.indexOf("pineapple") != (-1)) {
    console.log("I really like Pineapple");
}
else if (favorite_fruits.indexOf("banana") != (-1)) {
    console.log("I really like banana");
}
else if (favorite_fruits.indexOf("orange") != (-1)) {
    console.log("I really like Orange");
}
else if (favorite_fruits.indexOf("watermelon") != (-1)) {
    console.log("I really like Watermelon");
}
else if (favorite_fruits.indexOf("mango") != (-1)) {
    console.log("I really like Mango");
}
else {
    console.log("Favorite food not found.");
}
