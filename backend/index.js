const express = require("express")
const mongoose = require("mongoose")
const cors=require("cors")
const mongooseUrl = "mongodb://localhost:27017/practice"
const userRoutes=require("./routes/userRoutes")
const app = express()
app.use(cors({}))
app.use(express.json())
app.use("/api/array",userRoutes)
const port = 3000
mongoose.connect(mongooseUrl).then(() => {
    console.log("mongobd is connected")
}).catch((err) => {
    console.log("mongodb is not connected")
})
app.listen(port, () => {
    console.log(`server is running on port no ${port}`)
})
