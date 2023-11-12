import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.get('', cardapioController.visualizarItens)
router.post('', cardapioController.adicionarItem)
router.delete('/:cpf', cardapioController.removerItem)
router.put('/:cpf', cardapioController.alterarItem)

export default router