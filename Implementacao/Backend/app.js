import express from 'express'
import bodyParser from 'body-parser'
import usuariosRouter from './src/routes/usuarios.routes.js'
import cardapioRouter from './src/routes/cardapio.routes.js'
import pedidosRouter from './src/routes/pedidos.routes.js'
import itensPedidosRouter from './src/routes/itensPedidos.routes.js'
import enderecosRouter from './src/routes/enderecos.routes.js'
import cors from 'cors'

const app = express()

// Configuração básica do CORSs
app.use(cors());

app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extend: true }))

app.use("/usuarios", usuariosRouter)
app.use("/cardapio", cardapioRouter)
app.use("/pedidos/itensPedidos", itensPedidosRouter)
app.use("/pedidos/enderecos", enderecosRouter)
app.use("/pedidos", pedidosRouter)

const port = 3000
app.listen(port, mensagemServisor)

function mensagemServisor() {
    console.log("Servidor rodando com sucesso")
}
