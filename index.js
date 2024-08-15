require('dotenv').config();
require("./db");
const express = require('express');
const studentsRouter = require('./routes/students.router');
const freeLessonrouter = require('./routes/free-lesson.router')
const cors = require('cors');

const app = express();

// Configure CORS
// const corsOptions = {
//     origin: 'https://codeheroes.vercel.app', // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Allow the methods you need
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
//   };
  const allowedOrigins = [
    'https://www.thecodeheroes.com',
    'https://codeheroes.vercel.app',
  ];
  
  app.use(cors({
    origin: function(origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

app.use(express.json());  
app.use("/api/v1/students",studentsRouter);
app.use("/api/v1/free-lesson",freeLessonrouter);


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port} ....`)
})