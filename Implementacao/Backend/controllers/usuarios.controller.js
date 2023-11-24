import usuariosServices from '../services/usuarios.services.js'


async function logaUsuario(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    var resultado = null
    resultado = await usuariosServices.logaUsuario(email, senha);
    res.send(resultado)
}


async function cadastrarCliente(req, res) {
    const nome = req.body.nome;
    const email = req.params.email;
    const senha = req.body.senha;
    const isCliente = true;

    const resultado = await usuariosServices.cadastrarCliente(nome, email, senha, isCliente);
    res.send(resultado)
}

export default { cadastrarCliente, logaUsuario };