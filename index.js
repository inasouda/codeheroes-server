require('dotenv').config();
require("./db");
const express = require('express');
const studentsRouter = require('./routes/students.router');
const cors = require('cors');

const app = express();

// Configure CORS
const corsOptions = {
    origin: 'https://codeheroes.vercel.app', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the methods you need
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  };
  
  app.use(cors(corsOptions));

app.use(express.json());  
app.use("/api/v1/students",studentsRouter);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port} ....`)
})