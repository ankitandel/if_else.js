const readlineasync=require("readline-sync");
var day=readlineasync.question("enter the day");
let time=readlineasync.question("enter the time");
if (day=="sunday"){
    if (time=="breakfast"){
        console.log("pasta");
    }
    else if (time=="lunch"){
        console.log("daal chawal");
    }
    else{
        console.log("baigan bharata");
    }
}
else if (day=="monday"){
    if (time=="breakfast"){
        console.log("ali paratha");
    }
    else if (time=="lunch"){
        console.log("chicken chawal");
    }
    else{
        console.log("tandoori roti");
    }
}
else if (day=="tuesday"){
    if (time=="breakfast"){
        console.log("methi paratha");
    }
    else if (time=="lunch"){
        console.log("mutter paneer");
    }
    else{
        console.log("malai kofta");
    }
}
else if (day=="wendesday"){
    if (time=="breakfast"){
        console.log("bhel puri");
    }
    else if (time=="lunch"){
        console.log("masala dosa");
    }
    else{
        console.log("idli sambar");
    }
}
else if (day=="thursday"){
    if (time=="breakfast"){
        console.log("magi");
    }
    else if (time=="lunch"){
        console.log("chapati subji");
    }
    else{
        console.log("fried rice");
    }
}
else if (day=="friday"){
    if (time=="breakfast"){
        console.log("sandwich");
    }
    else if (time=="lunch"){
        console.log("paratha");
    }
    else{
        console.log("mutton bhakari");
    }
}
else if (day=="saturday"){
    if (time=="breakfast"){
        console.log("bread butter");
    }
    else if (time=="lunch"){
        console.log("alu palak");
    }
    else{
        console.log("chole bhatura");
    }
}