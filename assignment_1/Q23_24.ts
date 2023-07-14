//QUESTION-23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let bike:string="honda";
console.log("Is bike honda?I predict true");
console.log(bike=="honda"?true:false);

let car:string="toyo";
console.log("I predict false");
console.log(car=="toyota"?true:false);

let num:number=33;
console.log("I predict false");
console.log(num<2023?true:false)

console.log("I predict Odd");
console.log(num%2==0?"number is even":"number is odd")

let year:number=2023;
console.log("I predict equal")
console.log((2023-2002)>=21?"You can travel international":"You cannot travel international")

let facts=true;
console.log(facts?"That is true":"That is false");

let test=[1,2,3,9,8,7];
console.log(test.indexOf(125)!=-1?"Item found":"Item not found");

console.log(test.indexOf(2)==-1?"Item not in Array":"Item in Array");

console.log(test[1]!>test[0]?"Array is not sorted":"Array is sorted");

let old_=false;
let new_=true;
let extra_=false;
console.log(((old_||new_)&&extra_)?"this is true":"this is false");

let dummy=6578;
let dummy_=123456;
console.log(dummy==dummy_?"they are equal":"they are unequal")

