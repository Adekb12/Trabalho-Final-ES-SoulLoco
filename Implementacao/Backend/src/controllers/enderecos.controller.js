import enderecosServices from '../services/enderecos.services.js'

async function visualizarEnderecos(req, res) {
    const idCliente = req.params.idCliente;
    const resultado = await enderecosServices.visualizarEnderecos(idCliente)

    res.send(JSON.stringify(resultado))
}

async function adicionarEndereco(req, res) {
    const idCliente = req.params.idCliente;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const cep = req.body.cep;
    const estado = req.body.estado;
    const cidade = req.body.cidade;
    const bairro = req.body.bairro;

    var resultado = null;
    if (verificarCep(cep)) {
        if (validarNumero(numero)) {
            resultado = await enderecosServices.adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro);
        } else {
            resultado = { success: false, mensagem: "Numero invalido" }
        }
    } else {
        resultado = { success: false, mensagem: "CEP invalido" }
    }
    res.send(resultado)
}
function verificarCep(cep) {
    const regexCEP = /^[0-9]{5}\-[0-9]{3}$/;
    return regexCEP.test(cep);
}

function validarNumero(numero) {
    return numero >= 0
}

async function removerEndereco(req, res) {
    const idEndereco = req.params.idEndereco;

    var resultado = null;
    resultado = await enderecosServices.removerEndereco(idEndereco);

    res.send(resultado)
}

export default { adicionarEndereco, visualizarEnderecos, removerEndereco };