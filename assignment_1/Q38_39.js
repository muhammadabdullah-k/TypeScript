function describe_city(cty, cntry) {
    var city = "Karachi";
    var country = "Pakistan";
    if (cty != "") {
        city = cty;
    }
    if (cntry != "") {
        country = cntry;
    }
    console.log("The city ".concat(cty, " is in ").concat(cntry));
}
describe_city("", "");
describe_city("Lahore", "");
describe_city("Istanbul", "Turkey");
function city_country(cty, cntry) {
    return "".concat(cty, ",").concat(cntry);
}
console.log(describe_city("Karachi", "Pakistan"));
console.log(describe_city("Houston", "USA"));
console.log(describe_city("Umerkot", "Pakistan"));
console.log(describe_city("Bombay", "India"));
