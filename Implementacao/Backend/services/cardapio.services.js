import cardapioPersistence from "../persistence/cardapio.persistence.js";

async function visualizarItens() {
    return await cardapioPersistence.visualizarItens()
}

async function adicionarItem(nome, imagem, descricao, preco) {
    //regras de negócio
    var resultado = null;
    var isItem = await cardapioPersistence.existeItem(nome)
    if (!isItem) {
        resultado = await cardapioPersistence.adicionarItem(nome, imagem, descricao, preco)
    }

    return resultado
}

//!!!!!!!!!!!!!!!!!!!
async function removerItem(nome) {
    //regras de negócio ///// vai ter que adicionaar a verificação se o item está presente em algum pedido antes dde removê-lo

    var resultado = null;
    var isItem = await cardapioPersistence.existeItem(nome)
    if (isItem) {
        resultado = await cardapioPersistence.removerItem(nome)
    }

    return resultado
}

async function alterarItem(nomeNew, imagem, descricao, preco, nomeOld) {

    //regras de negócio
    var resultado = null;
    var isItem1 = await cardapioPersistence.existeItem(nomeOld)
    if (isItem1) {
        resultado = await cardapioPersistence.alterarItem(nomeNew, imagem, descricao, preco, nomeOld)
    }

    return resultado
}

export default { visualizarItens, adicionarItem, removerItem, alterarItem }