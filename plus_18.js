const readlineasync=require("readline-sync");
var y=readlineasync.question("enter the number");
if (y>=18){
    console.log("18 years compelet");
    var education=readlineasync.question("enter the education");
    if (education=="graduate"){
        console.log("graduate is compelet");
        const experiance=readlineasync.question("enter the experiance");
        if (experiance=="yes"){
            console.log("experiance hai");
        }
        else{
            console.log("no experiance");
        }
    }
    else{
        console.log("graduate is less");
    }
}
else{
    console.log("18 years not compelet");
}