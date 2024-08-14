// models/RequestFreeLesson.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestFreeLessonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    enum: ['Friday Aug 30, 5:00PM', 'Saturday Aug 31, 5:00PM', 'Friday Sep 6, 5:00PM'],
    required: true,
  },
}, { timestamps: true });

const RequestFreeLesson = mongoose.model('RequestFreeLesson', requestFreeLessonSchema);
module.exports = RequestFreeLesson;
