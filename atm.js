let readlineasync=require("readline-sync");
var card=readlineasync.question("enter the card");
if (card=="debit"){
    console.log("propary inserted");
    var language=readlineasync.question("enter the language");
    if (language=="english"){
        console.log("your selected in english");
    }
    else if (language=="hindi"){
        console.log("you select hindi language");
        var pin =readlineasync.question("enter the number");
        if (pin ==1234){
            console.log("it is correct pin ");
            var transaction=readlineasync.question("enter the transaction")
            if (transaction=="balance enquiry"){
                console.log(" your balance is 9000");
            }
            else if (transaction=="withdrawal money"){
                console.log("you choose withdrawal money enter the ammount");
            }
            else if (transaction=="change the pin code"){
                console.log("your pin is changed");
                var account=readlineasync.question("enter the account");
                if (account=="saving"){
                    console.log("in saving account balance is 8000");
                }
                else if (account=="current"){
                    console.log("enter your amount");
                    var amount=readlineasync("enter the amount");
                    if (amount>=200 || amount<=5000){
                        console.log("procced");
                        var cash=readlineasync.question("you can take a cash");
                        if (cash=="yes"){
                            console.log(" yes collect cash");
                            var recipt=readlineasync("you want recipt");
                            if (recipt=="yes"){
                                console.log("i got recipt");
                            }
                            else{
                                console.log("no")
                            }
                        }
                        else{
                            console.log("no collect cash");
                        }
                    }
                    else{
                        console.log("try again");
                    }
                }
                else{
                    console.log("invalid");
                }
            }
            else{
                console.log("time out");
            }
        }
        else{
            console.log("wrong pin  try again");
        }
    }
    else{
        console.log("not selected");
    }
}
else{
    console.log("not propary inserted");
}
