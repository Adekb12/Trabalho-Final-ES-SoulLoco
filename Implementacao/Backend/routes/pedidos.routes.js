import express from 'express'
import pedidosController from '../controllers/pedidos.controller.js'

const router = express.Router()

router.get('', pedidosController.visualizarPedidos)
router.post('', pedidosController.criarPedido)
router.delete('/:idPedido', pedidosController.cancelarPedido)

export default router