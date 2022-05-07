const readlineasync=require("readline-sync");
var day=readlineasync.question("enter the day");
if (day=="sunday"){
    console.log("i have to go outside");
    var permission=readlineasync.question("enter the permission");
    if (permission=="disco"){
        console.log("yes you can go outside");
        var reason=readlineasync.question("enter the reason");
        if (reason=="hospital"){
            console.log("go in quarentine");
            var time=readlineasync.question("enter the time");
            if (time<=6){
                console.log("you are come in compus ");
            }
            else{
                console.log("you are not comeing in compus after 6.o clock");
            }
        }
        else{
            console.log("no need to go quarentine");
        }
    }
    else{
        console.log("no permission");
    }
}
else{
    console.log("sunday is not holiday so you not go outside");
}