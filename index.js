require('dotenv').config();
require("./db");
const express = require('express');
const studentsRouter = require('./routes/students.router');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())
    
app.use("/api/v1/students",studentsRouter);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port} ....`)
})