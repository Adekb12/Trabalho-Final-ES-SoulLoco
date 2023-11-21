import express from 'express'
import enderecosController from '../controllers/enderecos.controller.js'

const router = express.Router()

router.get('/:idCliente', enderecosController.visualizarEnderecos)
router.post('/:idCliente', enderecosController.adicionarEndereco)
router.delete('/:idEndereco', enderecosController.removerEndereco)

export default router