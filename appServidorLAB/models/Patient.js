const mongoose = require('mongoose')
const PatientSchema = mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    creationDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('patient', PatientSchema)