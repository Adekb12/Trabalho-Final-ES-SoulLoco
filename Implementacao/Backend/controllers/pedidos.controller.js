import pedidosServices from '../services/pedidos.services.js'

async function criarPedido(req, res) {
    const idCliente = req.params.idCliente;
    const dataPedido = req.body.dataPedido;
    const statusPedido = "Andamento";

    var resultado = null;
    resultado = await perdidosServices.criarPedido(idCliente, dataPedido, statusPedido);

    res.send(resultado)
}

async function visualizarPedidos(req, res) {
    const resultado = await pedidosServices.visualizarPedidos()

    res.send(JSON.stringify(resultado))
}

async function cancelarPedido(req, res) {
    const idPedido = req.params.idPedido;

    //validar os dados ??????????????????????????
    var resultado = null
    if (pedidosServices.existePedido(idPedido)) {
        resultado = await pedidosServices.cancelarPedido(idPedido);
    }

    res.send(resultado)
}

export default { criarPedido, visualizarPedidos, cancelarPedido };