"use strict";
//QUESTION-20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let cities = ['karachi', 'lahore', 'islamabad'];
let states = ['sindh', 'punjab', 'balochistan'];
let rivers = ['jhelum', 'chenab', 'ravi', 'sutlej', 'indus'];
console.log("cities", cities);
console.log("states", states);
console.log("rivers", rivers);
//QUESTION-21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let _sampleObject = {
    cities: cities,
    states: states,
    rivers: rivers
};
console.log("This is the _sampleObject", _sampleObject);
//QUSTION-22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//console.log(cities[10]);
console.log(cities[0]);
