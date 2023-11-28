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

async function visualizarPedidosCliente(idCliente) {
    return await pedidosPersistence.visualizarPedidosCliente(idCliente)
}

async function existePedido(idPedido) {
    //regras de negócio
    var resultado = null;
    resultado = await pedidosPersistence.existePedido(idPedido)
    return resultado
}

async function cancelarPedido(idPedido) {

    var resultado = null;

    if (existePedido(idPedido)) {
        resultado = await pedidosPersistence.cancelarPedido(idPedido)
    } else {
        resultado = { success: false, mensagem: "Id do Pedido não encontrado!" }
    }
    return resultado
}

async function adicionarEndereco(idPedido, idEndereco) {

    var resultado = null;
    if (existePedido(idPedido)) {
        resultado = await pedidosPersistence.adicionarEndereco(idPedido, idEndereco)
    } else {
        resultado = { success: false, mensagem: "idPedido nao encontrado" }
    }
    return resultado
}

async function alterarStatus(idPedido, statusPedido) {

    var resultado = null;
    resultado = await pedidosPersistence.alterarStatus(idPedido, statusPedido)
    return resultado
}

export default { criarPedido, visualizarPedidos, visualizarPedidosCliente, existePedido, cancelarPedido, adicionarEndereco, alterarStatus }