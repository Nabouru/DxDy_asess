const express = require("express");
const {mongoose} = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 6969;

app.use(cors());
app.use(bodyParser.json());

Url = process.env.MONGO_URI

mongoose.connect(Url);

const connection  = mongoose.connection;
connection.once("open",() => {
    console.log("MongoDB Connection Success");
})


const employeeRouter = require('./routes/employee.js')
const adminRouter = require ('./routes/admin.js')
app.use("/employee",employeeRouter);
app.use("/admin",adminRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
