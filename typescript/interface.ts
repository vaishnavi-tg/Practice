interface User{
    firstname:string,
    lastname:string,
    age:number}
    


function isLegal(user:User){
    if(user.age>18){
        console.log("Legal")
    }
    else{
        console.log("NotLegal")
    }
}

function greet(user:User){
    console.log("Hi their "+ user.firstname + user.lastname)
}


isLegal({ firstname:"Vaishnavi",
    lastname:"TG",
    age:20
})

greet({
    firstname:"vaishnavi",
    lastname:"TG",
    age:20
})