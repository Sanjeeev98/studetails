const express = require("express")
const app = express();

const mongoose = require("mongoose")

const cors = require("cors");
const router = require("./router");

mongoose.connect("mongodb://127.0.0.1:27017/customer_crud")
.then(()=>{
    console.log("db is connected");
})
.catch(()=>{
    console.log("db is not connected");
})

app.use(express.json());
app.use(cors());

app.use("/api",router)


app.listen(3020,()=>{
    console.log("server is connected:3020");
})