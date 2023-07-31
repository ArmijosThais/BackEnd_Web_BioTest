const mongoose = require('mongoose')

const AttentionDetSchema = mongoose.Schema({
    attention:{
        type: String,
        require: true
    },
    exam:{
        type: String,
        require: true
    },
    result:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('attentionDetail', AttentionDetSchema)