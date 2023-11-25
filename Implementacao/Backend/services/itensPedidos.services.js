import itensPedidosPersistence from "../persistence/itensPedidos.persistence.js";

async function visualizarItensPedido(idPedido) {
    return await itensPedidosPersistence.visualizarItensPedido(idPedido)
}

async function adicionarItemPedido(idPedido, idItemCardapio, quantidade) {
    //regras de negócio
    var resultado = null;
    var isItemCardapio = await itensPedidosPersistence.existeItemCardapio(idItemCardapio)
    //verifica se existem o item no cardapio
    if(isItemCardapio){
        resultado = await itensPedidosPersistence.adicionarItemPedido(idPedido, idItemCardapio, quantidade)
    }
    return resultado
}

async function removerItemPedido(idPedido, idItemCardapio) {

    var resultado = null;
    //verifica se exitem pelo menos um item no pedido para remover
    var existeItem = await itensPedidosPersistence.existeItemPedido(idPedido)
    if(existeItem){
        resultado = await itensPedidosPersistence.removerItemPedido(idPedido, idItemCardapio)
    }
    return resultado
}

async function alterarQuantidadeItemPedido(idPedido, idItemCardapio, quantidade) {
    //regras de negocios
    var resultado = null;
    resultado = await itensPedidosPersistence.alterarQuantidadeItemPedido(idPedido, idItemCardapio, quantidade)
    return resultado
}

export default { visualizarItensPedido, adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido }