//Rutas para el esquema de Atenciones
const express = require('express')
const router = express.Router()
const attentionController = require('../controllers/attentionController')

//LLamar desde el navegador: localhost:4500/api/agencias
router.post('/',attentionController.addAttention)//agregar
router.get('/', attentionController.loadAttentions)//cargar todas
router.put('/:id', attentionController.updateAttention)//actualizar
router.get('/:id',attentionController.loadAttention)//cargar una
//router.get('/',attentionController.loadPatientAttentions)//cargar por paciente
router.delete('/:id',attentionController.deleteAttention)//eliminar

module.exports = router