import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.post('', clienteController.logarCliente)
router.post('/:email', clienteController.criarCliente)

export default router