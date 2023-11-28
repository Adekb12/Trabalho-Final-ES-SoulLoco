import BD from './BD.js'

async function visualizarItensPedido(idPedido) {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from itensPedidos where idPedido=$1 order by idItemPedido", [idPedido]);
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function adicionarItemPedido(idPedido, idItemCardapio, quantidade) {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("insert into itensPedidos (idPedido, idItemCardapio, quantidade) values ($1, $2, $3) returning *", [idPedido, idItemCardapio, quantidade]);
        resultado = { success: true, mensagem: "Item adicionado" }
    } catch (err) {
        console.log(err)
        resultado = { success: false, mensagem: "Erro ao adicionar no BD" }
    } finally {
        conn.release()
    }

    return resultado
}

async function removerItemPedido(idItemPedido) {
    // conectar no BD
    // executar operação SQL
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from itenspedidos where idItemPedido=$1 returning *", [idItemPedido]);
        resultado = { success: true, mensagem: "Item de pedido removido" };
    } catch (err) {
        console.log(err)
        resultado = { success: false, mensagem: "Erro ao remover do BD" };
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarQuantidadeItemPedido(idItemPedido, quantidade) {
    //conectar bd
    //executar operacao bd

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("update itensPedidos set quantidade = $2 where idItemPedido = $1 returning *", [idItemPedido, quantidade]);
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }
    return resultado
}

async function existeItemCardapio(idItemCardapio) {
    // conectar no BD
    // executar operação SQL

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from cardapio where idItem=$1", [idItemCardapio]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}
async function existeItemPedido(idPedido) {

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from itensPedidos where idPedido =$1", [idPedido]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

export default { visualizarItensPedido, adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido, existeItemCardapio, existeItemPedido }