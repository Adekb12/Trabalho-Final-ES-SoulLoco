import BD from './BD.js'

async function adicionarItemPedido(idPedido, quantidade) {

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("insert into itensPedido (idPedido, quantidade) values ($1, $2) returning *", [idPedido, quantidade]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function removerItemPedido(idPedido, idItem) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from itensPedidos where idPedido=$1 and idItem=$2 returning *", [idPedido, idItem]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarQuantidadeItemPedido(idPedido, idItem, quantidade) {
    //conectar bd
    //executar operacao bd
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("update itensPedidos set quantidade = $3 where idPedido = $1 AND idItemCardapio = $2 returning *", [idPedido, idItem, quantidade]);
        console.log(query.rows);
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }
    return resultado
}

export default { adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido }