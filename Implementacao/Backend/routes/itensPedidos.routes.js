import express from 'express'
import itensPedidosController from '../controllers/itensPedidos.controller.js'

const router = express.Router()

router.get('/:idPedido', itensPedidosController.visualizarItensPedido)
router.post('/:idPedido', itensPedidosController.adicionarItemPedido)
router.put('/:idPedido', itensPedidosController.alterarQuantidadeItemPedido)
router.delete('/:idPedido/:idItemPedido', itensPedidosController.removerItemPedido)

export default router