const readlineasync=require("readline-sync");
var month=readlineasync.question("enter the month");
if (month=="january"){
    console.log("it is january month");
    var days=readlineasync.question("enter the days");
    if (days==31){
        console.log("january has 31 days");
    }
    else{
        console.log("this month is not january");
    }
}
else if (month=="february"){
    console.log("it is february month");
    if (days==28){
        console.log("february has 28 days");
    }
    else{
        console.log("this month is 29 days");
    }
}
else if (month=="march"){
    console.log("it is march month");
    if (days==31){
       console.log("march has 31 days");
    }
    else{
        console.log("it is not march month");
    }
}
else if (month=="april"){
    console.log("it is april month");
    if (days==30){
        console.log("april has 30 days");
    }
    else{
        console.log("this month is not 30 days");
    }
}
else if (month=="may"){
    console.log("it is may month");
    if (days==31){
        console.log("may has 31 days");
    }
    else{
        console.log("this month is not may");
    }
}
else if (month=="june"){
    console.log("it is june month");
    if (days==30){
        console.log("it is june month");
    }
    else{
        console.log("this month is not 30 days");
    }
}
else if (month=="july"){
    console.log("it is july month");
    if (days==31){
        console.log("july has 31 days");
    }
    else{
        console.log("this month is not 31 days");
    }
}
else if (month=="augest"){
    console.log("it is augest month");
    if (days==31){
        console.log("augest has 31 days");
    }
    else{
        console.log("this  is not augest month ");
    }
}
else if (month=="septembar"){
    console.log("it is september month");
    if (days==30){
        console.log("september has 30 days");
    }
    else{
        console.log("september has not 30 days");
    }
}
else if (month=="octomber"){
    console.log("it is octomber month");
    if (days==31){
        console.log("its month 31 days");
    }
    else{
        console.log("this month is not 31 days");
    }
}
else if (month=="november"){
    console.log("it is november month");
    if (dyas==30){
        console.log("this month is 30 days");
    }
    else{
        console.log("this month is not november");
    }
}
else if (month=="december"){
    console.log("it is december month");
    if (days==31){
        console.log("this month is 31 days");
    }
    else{
        console.log("this month is not 31 days");
    }
}
else{
    console.log("this is not january month");
}