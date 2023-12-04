import pedidosServices from '../services/pedidos.services.js'

async function criarPedido(req, res) {
    const idCliente = req.params.idCliente;
    const dataPedido = req.body.dataPedido;
    const statusPedido = "Andamento";

    var resultado = null;
    resultado = await pedidosServices.criarPedido(idCliente, dataPedido, statusPedido);

    res.send(resultado)
}

async function visualizarPedidos(req, res) {
    const resultado = await pedidosServices.visualizarPedidos()

    res.send(JSON.stringify(resultado))
}

async function visualizarPedidosCliente(req, res) {
    const idCliente = req.params.idCliente;
    const resultado = await pedidosServices.visualizarPedidosCliente(idCliente)

    res.send(JSON.stringify(resultado))
}

async function cancelarPedido(req, res) {
    const idPedido = req.params.idPedido;
    var resultado = null
    resultado = await pedidosServices.cancelarPedido(idPedido);
    res.send(resultado)
}

async function adicionarEndereco(req, res) {
    const idPedido = req.params.idPedido;
    const idEndereco = req.body.idEndereco;
    var resultado = null
    resultado = await pedidosServices.adicionarEndereco(idPedido, idEndereco);
    res.send(resultado)
}

async function alterarStatus(req, res) {
    const idPedido = req.params.idPedido;
    const statusPedido = req.params.statusPedido;
    var resultado = null
    resultado = await pedidosServices.alterarStatus(idPedido, statusPedido);
    res.send(resultado)
}

export default { criarPedido, visualizarPedidos, visualizarPedidosCliente, cancelarPedido, adicionarEndereco, alterarStatus };