const RequestFreeLesson = require('../models/freeLesson.model');
const Student = require ('../models/student.model')

const requestFreeLesson = async (req,res) =>{
    console.log('hello')
    const freeLesson = await RequestFreeLesson.create(req.body)
    res.send(freeLesson);
}

module.exports = {
    requestFreeLesson,
}