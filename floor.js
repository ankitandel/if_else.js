let readlineSync = require("readline-sync");
var floor=readlineSync.question("enter the floor");
if (floor == 1){
    console.log("its first floor");
    console.log("go streght");
    var side=readlineSync.question("enter the side");
    if (side== "left" ){
        console.log("ok take a left");
    }
    else{
        console.log("right side ");
    }
}
else{
    console.log("2nd floor");
}
var floor2=readlineSync.question("enter the floor");
if (floor2 == 2){
    console.log("Its Second Floor... ");
    var side=readlineSync.question("enter the side");
    if (side== "left"){
        console.log("Move on left corridor");
    }
    else{
        console.log("There is no right corridor");
    }
}
else{
    console,log("no floor");
}