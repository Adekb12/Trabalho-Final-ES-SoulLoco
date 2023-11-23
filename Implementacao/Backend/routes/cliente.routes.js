import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.post('/:email', clienteController.criarCliente)
router.post('', clienteController.logarCliente)


export default router