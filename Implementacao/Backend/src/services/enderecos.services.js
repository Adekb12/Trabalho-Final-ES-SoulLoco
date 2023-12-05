import enderecosPersistence from "../persistence/enderecos.persistence.js";

async function visualizarEnderecos(idCliente) {
    return await enderecosPersistence.visualizarEnderecos(idCliente)
}

async function adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro) {
    var resultado = null;
    //verifica se o endereco ja existe para adicionar um novo
    var isEndereco = await enderecosPersistence.existeEndereco(logradouro, numero, cep, estado, cidade, bairro)
    if (!isEndereco) {
        resultado = await enderecosPersistence.adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro)
    }else{
        resultado = { success: false, mensagem: "Endereco ja existe" }
    }
    return resultado
}

async function removerEndereco(idEndereco) {
    var resultado = null;
    resultado = await enderecosPersistence.removerEndereco(idEndereco)
    return resultado
}

export default { adicionarEndereco, visualizarEnderecos, removerEndereco }