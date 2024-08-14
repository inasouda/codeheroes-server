const Student = require ('../models/student.model')

const createNewStudent = async (req,res) =>{
    console.log('hello')
    const student = await Student.create(req.body)
    res.send(student);
}

module.exports = {
    createNewStudent,
}