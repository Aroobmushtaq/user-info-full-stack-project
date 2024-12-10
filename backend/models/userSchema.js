const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    class:String,
    rollNo:Number,
    age:Number,
})
module.exports=mongoose.model("User",userSchema)