import express from 'express'
import cardapioController from '../controllers/cardapio.controller.js'

const router = express.Router()

router.get('', cardapioController.visualizarItens)
router.get('/:iditem', cardapioController.visualizarItem)
router.post('', cardapioController.adicionarItem)
router.delete('/:idItem', cardapioController.removerItem)
router.put('/:idItem', cardapioController.alterarItem)

export default router