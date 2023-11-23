import clienteServices from '../services/cliente.services.js'


async function logarCliente(req, res) {
    //capturar os dados 
    console.log("Entrou em logar")
    const email = req.body.email;
    const senha = req.body.email;
    //validar os dados
    var resultado = null
    resultado = await clienteServices.logarCliente(email, senha);
    res.send(resultado)
}


async function criarCliente(req, res) {
    const nome = req.body.nome;
    const email = req.params.email;
    const senha = req.body.senha;
    console.log("Entrou em")
    //validar os dados
    //chamada para Services
    const resultado = await clienteServices.criaCliente(nome, email, senha);
    res.send(resultado)
}

export default { criarCliente, logarCliente };