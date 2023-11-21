import itensPedidosServices from '../services/itensPedidos.services.js'
import pedidosPersistence from "../persistence/pedidos.persistence.js";
import cardapioPersistence from '../persistence/cardapio.persistence.js';

async function adicionarItemPedido(req, res) {
    const idPedido = req.params.idPedido;
    const quantidade = req.body.quantidade;

    var resultado = null;
    resultado = await itensPedidosServices.adicionarItemPedido(idPedido, quantidade);

    res.send(resultado)
}

async function removerItemPedido(req, res) {
    const idPedido = req.params.idPedido;
    const idItem = req.params.idItem;
    //validar os dados ??????????????????????????
    var resultado = null
    if (pedidosPersistence.existePedido(idPedido) && cardapioPersistence.existeItem(idItem)) {
        resultado = await itensPedidosServices.removerItemPedido(idPedido, idItem);
    }

    res.send(resultado)
}

async function alterarQuantidadeItemPedido(req, res) {
    const idPedido = req.params.idPedido;
    const idItem = req.body.idItem;
    const quantidade = req.body.quantidade;

    //validar os dados
    var resultado = null
    if (verificarQuantidade(quantidade) && cardapioPersistence.existeItem(idItem) && pedidosServices.existePedido(idPedido)) {
        resultado = await cardapioServices.alterarQuantidade(idPedido, idItem, quantidade);
    }
    res.send(resultado)
}

function verificarQuantidade(quantidade) {
    return quantidade > 0
}

export default { adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido };