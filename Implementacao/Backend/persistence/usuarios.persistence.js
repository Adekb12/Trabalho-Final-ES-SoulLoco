import BD from './BD.js'

async function logarUsuario(email, senha) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    var usuario = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from usuarios where email=$1 and senha=$2", [email, senha]);
        if (query.rows.length > 0) {
            usuario = { idUsuario: query.rows[0].idusuario, isCliente: query.rows[0].iscliente }
            resultado = { success: true, usuario, mensagem: "Usuario logado com sucesso" };
        } else {
            resultado = { success: false, usuario, mensagem: "Senha incorreta" }
        }
    } catch (err) {
        console.log(err)
        resultado = { success: false, usuario, mensagem: "Erro na conexão ao banco de dados" }
    } finally {
        conn.release()
    }
    return resultado
}

async function existeUsuario(email) {

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from usuarios where email=$1", [email]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

async function cadastrarCliente(nome, email, senha, idCliente) {
    // conectar no BD
    // executar operação SQL
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("insert into usuarios (nome, email, senha, isCliente) values ($1, $2, $3, $4) returning idusuario", [nome, email, senha, idCliente]);
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function pegarIdCliente(idPedido) {

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select idCliente from pedidos where idPedido=$1", [idPedido]);
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

export default { logarUsuario, cadastrarCliente, existeUsuario, pegarIdCliente }