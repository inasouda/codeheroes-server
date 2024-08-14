const mongoose = require("mongoose")

const MONGODB_URI = process.env.MONGODB_URI

const dbConnection = mongoose.connect(MONGODB_URI)
.then(()=> {console.log(MONGODB_URI) ;console.log("Connected to MongoDB...")})
.catch((err)=> console.log("could not connect to MonggoDB...",err))


module.exports = dbConnection;