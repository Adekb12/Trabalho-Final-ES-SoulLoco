import express from 'express'
import bodyParser from 'body-parser'
import clienteRouter from './routes/cliente.routes.js'
import cardapioRouter from './routes/cardapio.routes.js'
import pedidosRouter from './routes/pedidos.routes.js'
import itensPedidosRouter from './routes/itensPedidos.routes.js'
import enderecosRouter from './routes/enderecos.routes.js'

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extend: true }))

app.use("/cliente", clienteRouter)
app.use("/cardapio", cardapioRouter)
app.use("/pedidos", pedidosRouter)
app.use("/pedidos/itensPedidos", itensPedidosRouter)
app.use("/pedidos/enderecos", enderecosRouter)

app.listen(3000, mensagemServisor)

function mensagemServisor() {
    console.log("Servidor rodando com sucesso")
}
