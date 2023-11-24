import express from 'express'
import usuariosController from '../controllers/usuarios.controller.js'

const router = express.Router()

router.post('/:email', usuariosController.cadastrarCliente)
router.post('', usuariosController.logaUsuario)


export default router