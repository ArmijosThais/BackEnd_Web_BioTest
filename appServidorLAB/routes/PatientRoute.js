//Rutas para el esquema de agencias
const express = require('express')
const router = express.Router()
const patientController = require('../controllers/patientController')

//LLamar desde el navegador: localhost:4500/api/agencias
router.post('/',patientController.addPatient)//agregar
router.get('/', patientController.loadPatients)//cargar todas
router.put('/:id', patientController.updatePatient)//actualizar
router.get('/:id',patientController.loadPatient)//cargar una
router.delete('/:id',patientController.deletePatient)//eliminar

module.exports = router