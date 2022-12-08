const Patient = require('../models/Patient')

exports.addPatient = async(req, res) => {
    try {
        let patient
        //Crear la agencia
        patient = new Patient(req.body)
        await patient.save()
        res.send(patient)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al registrar el paciente') //ERROR 500->Error interno del servidor
    }
}

exports.loadPatients = async(req, res) => {
    try {
        const patients = await Patient.find()
        res.json(patients)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado de pacientes') //ERROR 500->Error interno del servidor
    }
}

exports.loadPatient = async(req, res) => {
    try {
        let patient = await Patient.findById(req.params.id)
        if(!patient){
            res.status(404).json({msg: 'No existe el Paciente'})
        }
        res.json(patient)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el resgistro') //ERROR 500->Error interno del servidor
    }
}

exports.updatePatient = async(req, res) => {
    try {
        const {name, lastname, phone, address } = req.body
        let patient = await Patient.findById(req.params.id)
        if(!patient){
            res.status(404).json({msg: 'No existe el Paciente'})
        }
        patient.name = name
        patient.lastname = lastname
        patient.phone = phone
        patient.address = address
        //manda a encontrar y actualizar a traves del id
        patient = await Patient.findOneAndUpdate({_id:req.params.id}, patient, {new: true})

        res.json(patient) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el resgistro')
    }
}

exports.deletePatient = async(req, res) => {
    try {
        let patient = await Patient.findById(req.params.id)
        if(!patient){
            res.status(404).json({msg: 'No existe el Paciente'})
        }
        await Patient.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Paciente eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el resgistro')
    }
}