import itensPedidosPersistence from "../persistence/itensPedidos.persistence.js";

async function visualizarItensPedido(idPedido) {
    return await itensPedidosPersistence.visualizarItensPedido(idPedido)
}

async function adicionarItemPedido(idPedido, idItemCardapio, quantidade) {
    //regras de negócio
    var resultado = null;
    var isItemCardapio = await itensPedidosPersistence.existeItemCardapio(idItemCardapio)
    //verifica se existem o item no cardapio
    if (isItemCardapio) {
        resultado = await itensPedidosPersistence.adicionarItemPedido(idPedido, idItemCardapio, quantidade)
    } else {
        resultado = { success: false, mensagem: "Erro: item não encontrado!" }
    }
    return resultado
}

async function removerItemPedido(idItemPedido) {

    var resultado = null;

    resultado = await itensPedidosPersistence.removerItemPedido(idItemPedido)

    return resultado
}

async function alterarQuantidadeItemPedido(idItemPedido, quantidade) {
    //regras de negocios
    var resultado = null;
    resultado = await itensPedidosPersistence.alterarQuantidadeItemPedido(idItemPedido, quantidade)
    return resultado
}

export default { visualizarItensPedido, adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido }