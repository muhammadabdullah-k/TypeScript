//QUESTION-41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 
let magicians_name:string[]=["Thonny","Pretz","deedz","houDini"];

function show_magicians(names:string[]):void{
    for(let i=0;i<names.length;i++){
        console.log(names[i]);
    }
}
show_magicians(magicians_name);


//QUESTION-42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(names:string[]):string[]{
    for(let i=0;i<names.length;i++){
        names[i]="great "+names[i];
    }
    return names
}

magicians_name=make_great(magicians_name);
show_magicians(magicians_name);

//QUESTION-43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

magicians_name=["Thonny","Pretz","deedz","houDini"];
let copyMagician_name:string[]=[...magicians_name];
//using spread operator
copyMagician_name=make_great(copyMagician_name);
console.log("show_magicians() function called with original array");
console.log(magicians_name);
show_magicians(magicians_name);
console.log("show_magicians() function called with copy array make_great() func was also called");
console.log(copyMagician_name)
show_magicians(copyMagician_name);