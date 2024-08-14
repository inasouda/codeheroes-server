const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [6, 'Name must be at least 6 characters long'],
        maxlength: [50, 'Name must be at most 50 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: [7, 'Email must be at least 7 characters long'],
        maxlength: [250, 'Email must be at most 250 characters long'],
        match: [/^\S+@\S+\.\S+$/, 'Email must be a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$/, 'Phone number must be 10 digits long']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: {
            values: ['Male', 'Female'],
            message: 'Gender must be either Male, Female'
        }
    },
    dob: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    codingExperience: {
        type: String,
        required: [true, 'Coding experience is required'],
        enum: {
            values: ['yes', 'no'],
            message: 'Coding experience must be either yes or no'
        }
    },
    grade: {
        type: String,
        required: [true, 'Grade is required'],
        enum: {
            values: [
                'PRE-K', 'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 
                'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8',
                'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
            ],
            message: 'Grade must be a valid school grade'
        }
    },
    photoConsent: {
        type: String,
        required: [true, 'Photo consent is required'],
        enum: {
            values: ['yes', 'no'],
            message: 'Photo consent must be either yes or no'
        }
    },
    lessonDay: {
        type: String,
        required: [true, 'Lesson day is required'],
        enum: {
            values: ['wednesday', 'thursday'],
            message: 'Lesson day must be either Wednesday or Thursday'
        }
    },
    comments: {
        type: String,
        maxlength: [500, 'Comments must be at most 500 characters long']
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
