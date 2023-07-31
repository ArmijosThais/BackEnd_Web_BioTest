const Attention = require('../models/Attention')

exports.addAttention = async(req, res) => {
    try {
        let attention
        attention = new Attention(req.body)
        await attention.save()
        res.send(attention)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al registrar la Atención') //ERROR 500->Error interno del servidor
    }
}

exports.loadAttentions = async(req, res) => {
    try {
        const attentions = await Attention.find()
        res.json(attentions) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado de atenciones') //ERROR 500->Error interno del servidor
    } 
} 

exports.loadPatientAttentions = async(req, res) => {
    try {
        const pati = req.body.patient
        console.log('Hola..'+pati+'..');

        const allattentions = await Attention.find()
        let attentions = allattentions.filter(attention => attention.patient.includes(req.body.patient))
        res.json(attentions) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado de atenciones') //ERROR 500->Error interno del servidor
    }
}

exports.loadAttention = async(req, res) => {
    try {
        let attention = await Attention.findById(req.params.id)
        if(!attention){
            res.status(404).json({msg: 'No existe la atención'})
        }
        res.json(attention)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar la atención') //ERROR 500->Error interno del servidor
    }
}

exports.updateAttention = async(req, res) => {
    try {
        const {patient, state} = req.body
        let attention = await Attention.findById(req.params.id)
        if(!attention){
            res.status(404).json({msg: 'No existe la atención'})
        }
        attention.patient=patient
        attention.state=state
        //manda a encontrar y actualizar a traves del id
        attention = await Attention.findOneAndUpdate({_id:req.params.id}, attention, {new: true})

        res.json(attention) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el resgistro')
    }
}

exports.deleteAttention = async(req, res) => {
    try {
        let attention = await Attention.findById(req.params.id)
        if(!attention){
            res.status(404).json({msg: 'No existe la atención'})
        }
        await Attention.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Atención eliminada con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el resgistro')
    }
} 