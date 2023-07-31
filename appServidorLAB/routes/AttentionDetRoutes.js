//Rutas para el esquema de Atenciones
const express = require('express')
const router = express.Router()
const attentionDetailController = require('../controllers/attentionDetController')

//LLamar desde el navegador: localhost:4500/api/agencias
router.post('/',attentionDetailController.addAttentionDet)//agregar
router.get('/', attentionDetailController.loadAttentionsDet)//cargar todas
router.put('/:id', attentionDetailController.updateAttentionDet)//actualizar
router.get('/:id',attentionDetailController.loadAttentionDet)//cargar una
router.delete('/:id',attentionDetailController.deleteAttentionDet)//eliminar

module.exports = router