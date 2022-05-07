let readlineasync=require("readline-sync");
var num1=readlineasync.questionInt("enter the number")
var num2=readlineasync.questionInt("enter the number")
var op=readlineasync.question("enter the oparator")
if (op=="+"){
    console.log(num1+num2);
}
else if (op=="-"){
    console.log(num1-num2);
}
else if (op=="*"){
    console.log(num1*num2);
}
else if (op=="%"){
    console.log(num1%num2);
}
else if (op=="//"){
    console.log(num1/num2);
}
else{
    console.log("nothing")
}
