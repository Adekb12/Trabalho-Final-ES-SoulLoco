import itensPedidosPersistence from "../persistence/itensPedidos.persistence.js";

async function visualizarItensPedido(idPedido) {
    return await itensPedidosPersistence.visualizarItensPedido(idPedido)
}

async function adicionarItemPedido(idPedido, idItemCardapio, quantidade) {
    //regras de negócio
    var resultado = null;
    resultado = await itensPedidosPersistence.adicionarItemPedido(idPedido, idItemCardapio, quantidade)
    return resultado
}

async function removerItemPedido(idPedido, idItemCardapio) {

    var resultado = null;
    resultado = await itensPedidosPersistence.removerItemPedido(idPedido, idItemCardapio)

    return resultado
}

async function alterarQuantidadeItemPedido(idPedido, idItemCardapio, quantidade) {
    //regras de negocios
    var resultado = null;
    resultado = await itensPedidosPersistence.alterarQuantidadeItemPedido(idPedido, idItemCardapio, quantidade)
    return resultado
}

export default { visualizarItensPedido, adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido }