const mongoose = require('mongoose')

const ExamSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    }
}) 
 
module.exports = mongoose.model('exam', ExamSchema)