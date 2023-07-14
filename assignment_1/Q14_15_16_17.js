"use strict";
//QUESTION-14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["alex", "tom", "clinton", "mike"];
console.log(`Hey ${guestList[0]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[1]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[2]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[3]}! You are invited to the family dinner`);
console.log('\n');
//QUESTION-15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log(`Unfortunately ${guestList[1]} cant come to the event due to commitments`);
guestList[1] = "robert";
console.log(`Hey ${guestList[0]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[1]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[2]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[3]}! You are invited to the family dinner`);
console.log('\n');
//QUESTION-16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
guestList.splice(0, 0, "ben");
let middleguestList = Math.floor(guestList.length / 2);
guestList.splice(middleguestList, 0, "james");
guestList.push("brian");
console.log(`Hey ${guestList[0]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[1]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[2]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[3]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[4]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[5]}! You are invited to the family dinner`);
console.log(`Hey ${guestList[6]}! You are invited to the family dinner`);
console.log('\n');
//QUESTION-17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log('We can only invite 2 people from the list');
console.log(`${guestList.pop()} you are now not invited to the dinner`);
console.log(`${guestList.pop()} you are now not invited to the dinner`);
console.log(`${guestList.pop()} you are now not invited to the dinner`);
console.log(`${guestList.pop()} you are now not invited to the dinner`);
console.log(`${guestList.pop()} you are now not invited to the dinner`);
console.log(`The onlt people invited to the dinner are: ${guestList[0]} and ${guestList[1]}`);
console.log(`${guestList.pop()} you are now not invited to the dinner`);
console.log(`${guestList.pop()} you are now not invited to the dinner`);
console.log("this is empty list", guestList);
