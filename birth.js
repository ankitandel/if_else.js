let readlineaSync = require("readline-sync");
var current=readlineaSync.questionInt("enter current year");
var birth=readlineaSync.questionInt("enter birth year");
if (current-birth>=0){
    n=current-birth
    console.log(n,"this is your age");
}
else if (current-birth<=1){
    n=current-birth
    console.log("your age is less than one year");
}
else{
    console.log("wrong age");
}