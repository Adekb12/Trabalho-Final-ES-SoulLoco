import BD from './BD.js'

async function visualizarItensPedido(idPedido) {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from itensPedidos where idPedido=$1", [idPedido]);
        console.log(query.rows)
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
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function removerItemPedido(idPedido, idItemCardapio) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from itenspedidos where idPedido=$1 and idItemCardapio=$2 returning *", [idPedido, idItemCardapio]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarQuantidadeItemPedido(idPedido, idItemCardapio, quantidade) {
    //conectar bd
    //executar operacao bd

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("update itensPedidos set quantidade = $3 where idPedido = $1 AND idItemCardapio = $2 returning *", [idPedido, idItemCardapio, quantidade]);
        console.log(query.rows);
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }
    return resultado
}

export default { visualizarItensPedido, adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido }