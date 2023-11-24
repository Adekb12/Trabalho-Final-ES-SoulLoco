import cardapioPersistence from "../persistence/cardapio.persistence.js";

async function visualizarItens() {
    return await cardapioPersistence.visualizarItens()
}

async function adicionarItem(nome, imagem, descricao, preco) {
    //regras de negócio
    var resultado = null;
    var isNItem = await cardapioPersistence.existeNomeItem(nome)

    if (!isNItem) {
        resultado = await cardapioPersistence.adicionarItem(nome, imagem, descricao, preco)
    }

    return resultado
}

//!!!!!!!!!!!!!!!!!!!
async function removerItem(idItem) {
    //regras de negócio ///// vai ter que adicionaar a verificação se o item está presente em algum pedido antes dde removê-lo

    var resultado = null;
    var isItem = await cardapioPersistence.existeItem(idItem)
    var isITemPedido = await cardapioPersistence.existeItemPedido(idItem)
    if (isItem && !isITemPedido) {
        resultado = await cardapioPersistence.removerItem(idItem)
    }else{
        resultado = { success: false, mensagem: "Item está em algum pedido"}
    }

    return resultado
}

async function alterarItem(idItem, nome, imagem, descricao, preco) {

    //regras de negócio
    var resultado = null;
    var isItem = await cardapioPersistence.existeItem(idItem)
    var isNR = await cardapioPersistence.existeNomeRepetido(idItem, nome);
    if (isItem && !isNR) {
        resultado = await cardapioPersistence.alterarItem(idItem, nome, imagem, descricao, preco)
    }

    return resultado
}

export default { visualizarItens, adicionarItem, removerItem, alterarItem }