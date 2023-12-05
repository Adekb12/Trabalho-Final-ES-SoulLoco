import BD from './BD.js'

async function visualizarEnderecos(idCliente) {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from enderecos where idCliente=$1", [idCliente]);
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
        var query = await conn.query("insert into enderecos (idCliente, logradouro, numero, cep, estado, cidade, bairro) values ($1, $2, $3, $4, $5, $6, $7)", [idCliente, logradouro, numero, cep, estado, cidade, bairro]);
        resultado = { success: true, mensagem: "Adicionado com sucesso" };
    } catch (err) {
        resultado = { success: false, mensagem: "Erro ao adicionar no BD" }
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function removerEndereco(idEndereco) {

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from enderecos where idEndereco=$1 returning *", [idEndereco]);
        resultado = { success: true, mensagem: "Removido com sucesso" }
    } catch (err) {
        console.log(err)
        resultado = { success: false, mensagem: "Não removido do BD com sucesso" }
    } finally {
        conn.release()
    }

    return resultado
}

async function existeEndereco(logradouro, numero, cep, estado, cidade, bairro) {
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from enderecos where logradouro=$1 and numero=$2 and cep=$3 and estado=$4 and cidade=$5 and bairro=$6", [logradouro, numero, cep, estado, cidade, bairro]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

export default { adicionarEndereco, visualizarEnderecos, removerEndereco, existeEndereco }