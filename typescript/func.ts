function runAfter1S(fn:()=>void){
    setTimeout(fn,1000)
}

runAfter1S(function(){
    console.log("hii")
})