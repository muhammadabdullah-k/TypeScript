//QUESTION-38
function describe_city(cty:string,cntry:string):void{
    let city:string="Karachi";
    let country:string="Pakistan";
    if(cty!=""){
        city=cty;
    }if(cntry!=""){
        country=cntry;
    }
    console.log(`The city ${cty} is in ${cntry}`);
}

describe_city("","");
describe_city("Lahore","");
describe_city("Istanbul","Turkey");

//QUESTION-39 
function city_country(cty:string,cntry:string):string{
    return `${cty},${cntry}`;
}

console.log(describe_city("Karachi","Pakistan"))
console.log(describe_city("Houston","USA"));
console.log(describe_city("Umerkot","Pakistan"))
console.log(describe_city("Bombay","India"))
