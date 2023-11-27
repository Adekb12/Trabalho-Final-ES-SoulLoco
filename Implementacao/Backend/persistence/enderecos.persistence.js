import BD from './BD.js'

async function visualizarEnderecos(idCliente) {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from enderecos where idCliente=$1", [idCliente]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function adicionarEndereco(idCliente, logradouro, numero, cep, estado, cidade, bairro) {

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("insert into enderecos (idCliente, logradouro, numero, cep, estado, cidade, bairro) values ($1, $2, $3, $4, $5, $6, $7) returning *", [idCliente, logradouro, numero, cep, estado, cidade, bairro]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function removerEndereco(idEndereco) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from enderecos where idEndereco=$1 returning *", [idEndereco]);
        console.log(query.rows)
        resultado = { success: true, mensagem: "Removido com sucesso" }
    } catch (err) {
        console.log(err)
        resultado = { success: false, mensagem: "Não removido do BD com sucesso" }
    } finally {
        conn.release()
    }

    return resultado
}

// async function existeEnderecoPedidos(idEndereco, idPedido) {

//     const conn = await BD.conectar();
//     try {
//         var query = await conn.query("select * from pedidos where idEndereco=$1 and idPedido!=$2", [idEndereco, idPedido]);
//         return query.rows.length > 0
//     } catch (err) {
//         console.log(err)
//         return false
//     } finally {
//         conn.release()
//     }
// }

async function existeEndereco(logradouro, numero, cep, estado, cidade, bairro) {
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from enderecos where logradouro=$1, numero=$2, cep=$3, estado=$4, cidade=$5, bairro=$6", [logradouro, numero, cep, estado, cidade, bairro]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}


export default { adicionarEndereco, visualizarEnderecos, removerEndereco, existeEndereco }