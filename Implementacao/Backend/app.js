import express from 'express'
import bodyParser from 'body-parser'
import clienteRouter from './routes/cliente.routes.js'
import cardapioRouter from './routes/cardapio.routes.js'

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extend: true }))

app.use("/cliente", clienteRouter)
app.use("/cardapio", cardapioRouter)

app.listen(3000, mensagemServisor)

function mensagemServisor() {
    console.log("Servidor rodando")
}