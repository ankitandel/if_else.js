let readlineaSync = require("readline-sync");
var time=readlineaSync.questionInt("enter time");
if (time>6 && time<=7){
   console.log ("exercise");
}
else if (time>7 && time<=9){
    console.log("berakfast");
}
else if (time>9 && time<=10){
    console.log("english activity");
}
else if (time>10 && time<=13){
    console.log("study");
}
else if (time>13 && time<=14.30){
    console.log("break");
}
else if (time>14.30 && time<=17.30){
    console.log("study");
}
else if (time>17.30 && time<=19){
    console.log("cultural activity")
}
else{
    console.log("rest time");
}