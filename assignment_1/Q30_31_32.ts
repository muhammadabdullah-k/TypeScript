// QUESTION-30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let arr_username:string[]=["alex","ben","tom","jamal","admin"]; 
if(arr_username.length>0){

    for(let i=0;i<arr_username.length;i++){
        if(arr_username[i]=="admin"){
            console.log(`Welcome ${arr_username[i]}! Would you like to see todays report?`);
        }
        else{
            console.log(`Hi ${arr_username[i]}!!`);
        }
    }
    
}else{
    console.log("the users array is empty!! We need to find some users")
}


// QUEStION-30: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

arr_username.pop();
arr_username.pop();
arr_username.pop();
arr_username.pop();
arr_username.pop();

if(arr_username.length>0){

    for(let i=0;i<arr_username.length;i++){
        if(arr_username[i]=="admin"){
            console.log(`Welcome ${arr_username[i]}! Would you like to see todays report?`);
        }
        else{
            console.log(`Hi ${arr_username[i]}!!`);
        }
    }
    
}else{
    console.log("the users array is empty!! We need to find some users")
} 

// QUESTION-32
let current_users:string[]=["james021","alex_newman","john_kra","francGerman"];
let new_users:string[]=["JAMES021","kiilJoooy","poTaTo","freeBie"];

for(let i:number=0;i<new_users.length;i++){
    if(current_users.indexOf(new_users[i])==(-1)){
        console.log("This username is available!!")
    }else{
        console.log("This username is taken!Enter a new username")
    }
}