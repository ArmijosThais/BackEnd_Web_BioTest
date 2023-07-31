const mongoose = require('mongoose')

const AttentionSchema = mongoose.Schema({
    patient:{
        type: String,
        require: true
    },
    creationDate:{
        type: Date,
        default: Date.now
    },
    state:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('attention', AttentionSchema)