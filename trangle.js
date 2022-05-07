let readlineaSync = require("readline-sync");
var angle1=readlineaSync.questionInt("enter the first angle");
var angle2=readlineaSync.questionInt("enter the first angle");
var angle3=readlineaSync.questionInt("enter the first angle");
if (angle1==angle2==angle3){
    console.log("equalater triangle");
}
else if (angle1 ==angle2 ||angle3==angle1){
    console.log("isoceles triangle");
}
else{
    console.log("scalare triangle");
}
