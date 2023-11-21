import pedidosPersistence from "../persistence/pedidos.persistence.js";

async function criarPedido(idCliente, dataPedido, statusPedido) {
    //regras de negócio
    var resultado = null;
    resultado = await pedidosPersistence.criarPedido(idCliente, dataPedido, statusPedido)
    return resultado
}

async function visualizarPedidos() {
    return await pedidosPersistence.visualizarPedidos()
}

async function existePedido(idPedido) {
    //regras de negócio
    var resultado = null;
    resultado = await pedidosPersistence.existePedido(idPedido)
    return resultado
}

async function cancelarPedido(idPedido) {

    var resultado = null;
    resultado = await pedidosPersistence.cancelarPedido(idPedido)

    return resultado
}

export default { criarPedido, visualizarPedidos, existePedido, cancelarPedido }