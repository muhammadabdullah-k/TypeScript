//QUESTION-36
function make_tshirt(size:string,txt:string):void{
    let shirt_size:string="Large";
    let shirt_txt:string="I love TypeScript/TS"
    if(size!=""){
        shirt_size=size;
    }
    if(txt!=""){
        shirt_txt=txt;
    }

    console.log(`Customer order recieved!\nThe shirt has a size of ${shirt_size} and has "${shirt_txt}" printed on it`);
}

make_tshirt("small","University starts, Basketball endds");

//QUESTION-37
make_tshirt("","");
make_tshirt("Medium","")
make_tshirt("Small","WeekEnds");