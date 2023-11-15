import BD from './BD.js'

async function visualizarItens() {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from cardapio");
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function adicionarItem(nome, imagem, descricao, preco) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("insert into cardapio (nome, imagem, descricao, preco) values ($1, $2, $3, $4) returning *", [nome, imagem, descricao, preco]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function existeItem(nome) {
    // conectar no BD
    // executar operação SQL

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from cardapio where nome=$1", [nome]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

async function removerItem(nome) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from cardapio where nome=$1 returning *", [nome]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarItem(nomeNew, imagem, descricao, preco, nomeOld) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("update cardapio set nome=$1, imagem=$2, descricao=$3, preco=$4 where nome=$5 returning *", [nomeNew, imagem, descricao, preco, nomeOld]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

export default {visualizarItens, adicionarItem, existeItem, removerItem, alterarItem}