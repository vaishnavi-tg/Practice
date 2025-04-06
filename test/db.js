import {mongoose} from "mongoose"

mongoose.connect(" ")


const UserSchema = new mongoose.Schema({
    firstname:String,
    email:String,
    age:Number
})

const User = mongoose.model("User",UserSchema)

module.export{
    User
}
