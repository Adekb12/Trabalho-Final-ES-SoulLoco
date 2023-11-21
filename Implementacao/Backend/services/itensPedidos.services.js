import itensPedidosPersistence from "../persistence/itensPedidos.persistence.js";

async function adicionarItemPedido(idPedido, quantidade) {
    //regras de negócio
    var resultado = null;
    resultado = await itensPedidosPersistence.adicionarItemPedido(idPedido, quantidade)
    return resultado
}

async function removerItemPedido(idPedido, idItem) {

    var resultado = null;
    resultado = await itensPedidosPersistence.removerItemPedido(idPedido, idItem)

    return resultado
}

async function alterarQuantidadeItemPedido(idPedido, idItem, quantidade) {
    //regras de negocios
    var resultado = null;
    resultado = await itensPedidosPersistence.alterarQuantidade(idPedido, idItem, quantidade)
    return resultado
}

export default { adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido}