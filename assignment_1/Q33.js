//QUESTION-33
var new_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < new_arr.length; i++) {
    if ((new_arr[i] % 10) == 1) {
        console.log("".concat(new_arr[i], "st"));
    }
    else if ((new_arr[i] % 10) == 2) {
        console.log("".concat(new_arr[i], "nd"));
    }
    else if ((new_arr[i] % 10) == 3) {
        console.log("".concat(new_arr[i], "rd"));
    }
    else if ((new_arr[i] % 10) >= 4 && new_arr[i] <= 9) {
        console.log("".concat(new_arr[i], "th"));
    }
    else {
        console.log("Incorrect number encountered");
    }
}
