const AttentionDet = require('../models/AttentionDetail')

exports.addAttentionDet = async(req, res) => {
    try {
        let attention
        attention = new AttentionDet(req.body)
        await attention.save()
        res.send(attention)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al registrar el examen') //ERROR 500->Error interno del servidor
    }
}

exports.loadAttentionsDet = async(req, res) => {
    try {
        const attentions = await AttentionDet.find()
        res.json(attentions) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado de exámenes') //ERROR 500->Error interno del servidor
    }
}

exports.loadAttentionDet = async(req, res) => {
    try {
        let attention = await AttentionDet.findById(req.params.id)
        if(!attention){
            res.status(404).json({msg: 'No existe el examen'})
        }
        res.json(attention)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el registro') //ERROR 500->Error interno del servidor
    }
}

exports.updateAttentionDet = async(req, res) => {
    try {
        const {exam, result} = req.body
        let attention = await AttentionDet.findById(req.params.id)
        if(!attention){
            res.status(404).json({msg: 'No existe el examen en la Atenciónr'})
        }
        attention.exam=exam
        attention.result=result
        //manda a encontrar y actualizar a traves del id
        attention = await AttentionDet.findOneAndUpdate({_id:req.params.id}, attention, {new: true})

        res.json(attention) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el resgistro')
    }
}

exports.deleteAttentionDet = async(req, res) => {
    try {
        let attention = await AttentionDet.findById(req.params.id)
        if(!attention){
            res.status(404).json({msg: 'No existe la atención'})
        }
        await AttentionDet.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el resgistro')
    }
}