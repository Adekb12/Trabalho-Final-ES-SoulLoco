import cardapioPersistence from "../persistence/cardapio.persistence.js";

async function visualizarItens() {
    return await cardapioPersistence.visualizarItens()
}

async function adicionarItem(nome, imagem, descricao, preco) {
    //regras de negócio
    var resultado = null;
    //verifica se ja existe algum item com o nome do item que vai ser adicionado
    var isNItem = await cardapioPersistence.existeNomeItem(nome)

    if (!isNItem) {
        resultado = await cardapioPersistence.adicionarItem(nome, imagem, descricao, preco)
    } else {
        resultado = { success: false, mensagem: "Esse nome já existe!" };
    }

    return resultado
}

async function removerItem(idItem) {

    var resultado = null;
    //verifica se existe esse item para ser removido
    var isItem = await cardapioPersistence.existeItem(idItem)
    //verifica se o item esta em algum pedido
    var isITemPedido = await cardapioPersistence.existeItemPedido(idItem)
    if (isItem && !isITemPedido) {
        resultado = await cardapioPersistence.removerItem(idItem)
    } else {
        resultado = { success: false, mensagem: "Item está em algum pedido" }
    }

    return resultado
}

async function alterarItem(idItem, nome, imagem, descricao, preco) {

    //regras de negócio
    var resultado = null;
    //verifica se o item existe para ser alterado
    var isItem = await cardapioPersistence.existeItem(idItem)
    var isNR = await cardapioPersistence.existeNomeRepetido(idItem, nome);
    if (isItem && !isNR) {
        resultado = await cardapioPersistence.alterarItem(idItem, nome, imagem, descricao, preco)
    } else {
        resultado = { success: false, mensagem: "Esse nome já existe!" };
    }

    return resultado
}

async function visualizarItem(idItem) {
    var resultado = null;
    resultado = await cardapioPersistence.visualizarItem(idItem)
    return resultado
}

export default { visualizarItens, adicionarItem, removerItem, alterarItem, visualizarItem }