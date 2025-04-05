import axios from "axios"
// This is for get
async function main(){
    response=await axios.get("........")
    console.log(response.data.todos.length)
}

// This is for post
async function main(){
    response=await axios.post("........")
    console.log(response.data.todos.length)
}

// This is for put

async function main(){
    response=await axios.put("........",{
        Body:"Bearer 123",

    }
    )
    console.log(response.data.todos.length)
}

// This is for delete

async function main(){
    response=await axios.delete("........")
    console.log(response.data.todos.length)
}