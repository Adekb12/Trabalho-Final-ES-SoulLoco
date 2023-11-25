import enderecosPersistence from "../persistence/enderecos.persistence.js";

async function visualizarEnderecos(idCliente) {
    return await enderecosPersistence.visualizarEnderecos(idCliente)
}

async function adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro) {
    var resultado = null;
    //verifica se o endereco ja existe para adicionar um novo
    var isEndereco = await enderecosPersistence.existeEnderecoPedidos(logradouro,numero,cep,estado,cidade,bairro)
    if(!isEndereco){
        resultado = await enderecosPersistence.adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro)
    }
    return resultado
}

async function removerEndereco(idEndereco, idPedido) {

    var resultado = null;
    //Verifica se existe pelo menos um endereco para remover
    var isEnderecoPedido = await enderecosPersistence.existeEnderecoPedidos(idEndereco, idPedido);
    if (!isEnderecoPedido) {
        resultado = await enderecosPersistence.removerEndereco(idEndereco)
    }
    return resultado
}

export default { adicionarEndereco, visualizarEnderecos, removerEndereco }