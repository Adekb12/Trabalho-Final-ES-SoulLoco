import BD from './BD.js'

async function criarPedido(idCliente, dataPedido, statusPedido) {

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("insert into pedidos (idCliente, dataPedido, statusPedido) values ($1, $2, $3) returning idPedido", [idCliente, dataPedido, statusPedido]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function visualizarPedidos() {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from pedidos where statusPedido='Confirmado'");
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function visualizarPedidosCliente(idCliente) {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from pedidos where idCliente=$1", [idCliente]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function existePedido(idPedido) {
    // conectar no BD
    // executar operação SQL

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from pedidos where idPedido=$1", [idPedido]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

async function cancelarPedido(idPedido) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from pedidos where idPedido=$1 returning *", [idPedido]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

export default { criarPedido, visualizarPedidos, visualizarPedidosCliente, existePedido, cancelarPedido }