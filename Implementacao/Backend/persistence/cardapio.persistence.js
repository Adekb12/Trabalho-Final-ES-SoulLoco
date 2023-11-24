import BD from './BD.js'

async function visualizarItens() {
    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("select* from cardapio");
        resultado = query.rows;
        console.log(resultado)
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

async function existeItem(idItem) {
    // conectar no BD
    // executar operação SQL

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from cardapio where idItem=$1", [idItem]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

async function existeNomeItem(nome) {
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

async function existeItemPedido(idItem) {

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from itensPedidos where idItemCardapio=$1", [idItem]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

async function existeNomeRepetido(idItem, nome) {
    // conectar no BD
    // executar operação SQL

    const conn = await BD.conectar();
    try {
        var query = await conn.query("select * from cardapio where nome=$2 and idItem!=$1", [idItem, nome]);
        return query.rows.length > 0
    } catch (err) {
        console.log(err)
        return false
    } finally {
        conn.release()
    }
}

async function removerItem(idItem) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("delete from cardapio where idItem=$1", [idItem]);
        console.log(query.rows)
        resultado = { success: true, mensagem: "Removido com sucesso!" };
    } catch (err) {
        console.log(err)
        resultado = { success: false, mensagem: "Erro ao remover do DB" };
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarItem(idItem, nome, imagem, descricao, preco) {
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try {
        var query = await conn.query("update cardapio set nome=$2, imagem=$3, descricao=$4, preco=$5 where idItem=$1 returning *", [idItem, nome, imagem, descricao, preco]);
        console.log(query.rows)
        resultado = query.rows;
    } catch (err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

export default { visualizarItens, adicionarItem, existeItem, existeNomeItem, existeNomeRepetido, existeItemPedido, removerItem, alterarItem }