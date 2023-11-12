import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.get('', clienteController.getTodosCliente)
router.get('/:cpf',clienteController.getUmCliente)
router.post('', clienteController.criaCliente)
router.put('/:cpf', clienteController.alteraCliente)
router.delete('/:cpf', clienteController.excluiCliente)

export default router