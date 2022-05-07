let readlineasync=require("readline-sync");
var massage1=readlineasync.question("enter the massage1")
if (massage1=="hii"){
    console.log("hellow");
    var massage2=readlineasync.question("enter the massage2")
    if (massage2=="how are you"){
        console.log("i am fine");
        var massage3=readlineasync.question("enter the massage3")
        if (massage3=="where do you live"){
            console.log("i live in pune");
            var massage4=readlineasync.question("enter the massage4")
            if (massage4=="is it a holiday today"){
                console.log("yes today is holiday");
            }
            else{
                console.log("no today is not hpliday");
            }
        }
        else{
            console.log("no i not live in pune");
        }
    }
    else{
        console.log("i am sike");
    }
}
else{
    console.log("by");
}
