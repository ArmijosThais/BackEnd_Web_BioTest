//Rutas para el esquema de Atenciones
const express = require('express')
const router = express.Router()
const examController = require('../controllers/examController')

//LLamar desde el navegador: localhost:4500/api/agencias
router.post('/',examController.addExam)//agregar
router.get('/', examController.loadExams)//cargar todas
router.put('/:id', examController.updateExam)//actualizar
router.get('/:id',examController.loadExam)//cargar una
router.delete('/:id',examController.deleteExam)//eliminar

module.exports = router