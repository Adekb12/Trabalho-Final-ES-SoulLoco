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
        var isItemPedido = await itensPedidosPersistence.existeItemPedido(idPedido, idItemCardapio)
        if (isItemPedido.length == 0) {
            resultado = await itensPedidosPersistence.adicionarItemPedido(idPedido, idItemCardapio, quantidade)
        } else {
            resultado = await itensPedidosPersistence.alterarQuantidadeItemPedido(isItemPedido[0].iditempedido, quantidade + isItemPedido[0].quantidade)
        }
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