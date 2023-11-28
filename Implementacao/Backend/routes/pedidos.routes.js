import express from 'express'
import pedidosController from '../controllers/pedidos.controller.js'

const router = express.Router()

router.get('', pedidosController.visualizarPedidos)
router.get('/:idCliente', pedidosController.visualizarPedidosCliente)
router.post('/:idCliente', pedidosController.criarPedido)
router.put('/:idPedido', pedidosController.adicionarEndereco)
router.put('/:idPedido/:statusPedido', pedidosController.alterarStatus)
router.delete('/:idPedido', pedidosController.cancelarPedido)

export default router