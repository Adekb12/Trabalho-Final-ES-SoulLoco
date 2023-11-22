import BD from './BD.js'

async function logarCliente(email, senha) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from cliente where email=$1 and senha=$2 return", [email, senha]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function existeCliente(email) {

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from cliente where email=$1", [email]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

async function criarCliente(nome, email, senha) {
    // conectar no BD
    // executar operação SQL
    console.log("Aqui")
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("insert into cliente (nome, email, senha) values ($1, $2, $3) returning idcliente", [nome, email, senha]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

export default { logarCliente, criarCliente, existeCliente }