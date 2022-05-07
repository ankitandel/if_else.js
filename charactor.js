const readlineasync=require("readline-sync");
var charactor=readlineasync.question("enter the charactor");
if (charactor >="a" && charactor<="z"|| charactor >"A"&& charactor<="Z"){
    console.log("it is alphabet");
}
else{
    console.log("it is not alphabet");
}