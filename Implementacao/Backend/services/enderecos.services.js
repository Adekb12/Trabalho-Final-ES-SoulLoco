import enderecosPersistence from "../persistence/enderecos.persistence.js";

async function visualizarEnderecos(idCliente) {
    return await enderecosPersistence.visualizarEnderecos(idCliente)
}

async function adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro) {
    //regras de negócio
    var resultado = null;
    resultado = await enderecosPersistence.adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro)
    return resultado
}

async function removerEndereco(idEndereco, idPedido) {

    var resultado = null;
    var isEnderecoPedido = await enderecosPersistence.existeEnderecoPedidos(idEndereco, idPedido);
    if (!isEnderecoPedido) {
        resultado = await enderecosPersistence.removerEndereco(idEndereco)
    }
    return resultado
}

export default { adicionarEndereco, visualizarEnderecos, removerEndereco }