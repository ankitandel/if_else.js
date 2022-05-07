const readlineasync=require("readline-sync");
var num=readlineasync.question("enter the number");
if (num<25){
    console.log("gread f");
}
else if (num>=25 && num<45){
    console.log("gread e");
}
else if (num>=45 && num<50){
    console.log("gread e");
}
else if (num>=50 && num<60){
    console.log("gread c");
}
else if (num>=60 && num<80){
    console.log("gread b");
}
else if (num>80){
    console.log("gread a");
}
else{
    console.log("fail");
}