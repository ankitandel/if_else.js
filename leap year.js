let readlineasync=require("readline-sync");
var year=readlineasync.question("enter the year");
if (year%4==0 || year%400==0){
    console.log("it is leap year");
}
else if (year%100==0){
    console.log("it is centuary year");
}
else{
    console.log("it is not leap year");
}
