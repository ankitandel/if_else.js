const readlineasync=require("readline-sync");
var day=readlineasync.question("enter the day");
var meal=readlineasync.question("enter the meal");
switch(day){
    case "sunday":
        switch(meal){
            case "breakfast":
                console.log("pasta")
                break
            case "lunch":
                console.log("daal chawal")
                break
            case"dinner":
                console.log("dal rice")
                break
        }
        break
    case"monday":
        switch(meal){
            case "breakfast":
                console.log("chana")
                break
            case "lunch":
                console.log("chapati bhaji")
                break
            case "dinner":
                console.log("khicadi")
                break
        }
        break
    case "tuesday":
        switch(meal){
            case "breakfast":
                console.log("poha")
                break
            case "lunch":
                console.log("fried rice")
                break
            case "dinner":
                console.log("pannir puri")
                break
        }
        break
    case "wednesday":
        switch(meal){
            case "breakfast":
                console.log("maggi")
                break
            case "lunch":
                console.log("bhaji bhakari")
                break
            case "dinner":
                console.log("masale bhat")
                break
        }
        break
    case "thursday":
        switch(meal){
            case "breakfast":
                console.log("paratha")
                break
            case "lunch":
                console.log("dal bhat")
                break
            case "dinner":
                console.log("matton bhakari")
                break
        }
        break
    case "firday":
        switch(meal){
            case "breakfast":
                console.log("sabudana khicadi")
                break
            case "lunch":
                console.log("ledi finger rice")
                break
            case "dinner":
                console.log("rice chikan")
                break
        }
        break
    case "saturday":
        switch(meal){
            case "breakfast":
                console.log("vada pav")
                break
            case "lunch":
                console.log("birryani")
                break
            case "dinner":
                console.log("pulav")
                break
        }
        break
    case "sunday":
        switch(meal){
            case "breakfast":
                console.log("samosa")
                break
            case "lunch":
                console.log("pulav")
                break
            case "dinner":
                console.log("chapati bhaji")
                break
        }
        break
    default:
        console.log("no day no menu")
    }
