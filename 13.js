// let readlineaSync = require("readline-sync");
// var name=readlineaSync.question("enter the name");
// if (name=="ankita"){
//     console.log("it is correct name");
// }
// else{
//     console.log("it is not correct");
// }
// let password=readlineaSync.questionInt("enter any number");
// if (password==12345){
//     console.log("its your account");
// }
// else{
//     console.log("password is wrong");
// }


let readlineaSync = require("readline-sync");
var name=readlineaSync.question("enter the name : ");
if (name>="a" && name<="z" || name>="A" && name<="Z") {
    console.log(name,"it is correct name");
}
else{
    console.log("it is not correct");
}
let password=readlineaSync.questionInt("enter any number");
if (password<=999999 && password>=100000){
    console.log("its your account");
}
else{
    console.log("password is wrong");
}