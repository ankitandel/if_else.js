let readlineasync=require("readline-sync");
var num1=readlineasync.questionInt("enter the number");
var num2=readlineasync.questionInt("enter the number");
var num3=readlineasync.questionInt("enter the number");
total=num1+num2+num3
if (total==180){
    console.log("it is valid trangle");
}
else{
    console.log("it is not valid trangle");
}