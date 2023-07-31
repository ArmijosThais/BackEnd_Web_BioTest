const Exam = require('../models/Exam')

exports.addExam = async(req, res) => {
    try {
        let exam
        exam = new Exam(req.body)
        await exam.save()
        res.send(exam)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al registrar el examen') //ERROR 500->Error interno del servidor
    }
}

exports.loadExams = async(req, res) => {
    try {
        const exams = await Exam.find()
        res.json(exams) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado de exámenes') //ERROR 500->Error interno del servidor
    }
} 

exports.loadExam = async(req, res) => {
    try {
        let exam = await Exam.findById(req.params.id)
        if(!exam){
            res.status(404).json({msg: 'No existe el examen'})
        }
        res.json(exam)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el registro') //ERROR 500->Error interno del servidor
    }
}

exports.updateExam = async(req, res) => {
    try {
        const {name, category, price} = req.body
        let exam = await Exam.findById(req.params.id)
        if(!exam){
            res.status(404).json({msg: 'No existe el examen'})
        }
        exam.name=name
        exam.category=category
        exam.price=price
        //manda a encontrar y actualizar a traves del id
        exam = await Exam.findOneAndUpdate({_id:req.params.id}, exam, {new: true})

        res.json(exam) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el resgistro')
    }
}

exports.deleteExam = async(req, res) => {
    try {
        let exam = await Exam.findById(req.params.id)
        if(!exam){
            res.status(404).json({msg: 'No existe el examen'})
        }
        await Exam.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el resgistro')
    }
}