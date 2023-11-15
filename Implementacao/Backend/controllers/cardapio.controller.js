import cardapioServices from '../services/cardapio.services.js'

async function visualizarItens(req, res) {
    const resultado = await cardapioServices.visualizarItens()

    res.send(JSON.stringify(resultado))
}

async function adicionarItem(req, res) {
    const nome = req.body.nome;
    const imagem = req.body.imagem;
    const descricao = req.body.descricao;
    const preco = req.body.preco;

    //validação do preço do item
    var resultado = null;
    if (ehPrecoValido(preco)) {
        resultado = await cardapioServices.adicionarItem(nome, imagem, descricao, preco);
    }

    res.send(resultado)
}

function ehPrecoValido(preco) {
    if (typeof preco !== 'number') {
        return false;
    }
    // Converte para string para facilitar a verificação do formato
    const precoString = preco.toString();
    // Verificar se é um número decimal no formato (10,2)
    if (!/^\d{1,8}(\.\d{1,2})?$/.test(precoString)) {
        return false;
    }
    // Verificar se é positivo
    if (preco < 0) {
        return false;
    }
    // Todas as condições foram atendidas
    return true;
}

////
async function removerItem(req, res) {
    const nome = req.params.nome;
    //validar os dados ??????????????????????????
    var resultado = null
    resultado = await cardapioServices.removerItem(nome);
    res.send(resultado)
}

async function alterarItem(req, res) {
    const nomeNew = req.body.nome;
    const imagem = req.body.imagem;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const nomeOld = req.params.nome;

    //validar os dados

    //chamada para Services
    const resultado = await cardapioServices.alterarItem(nomeNew, imagem, descricao, preco, nomeOld);
    res.send(resultado)
}

export default { visualizarItens, adicionarItem, removerItem, alterarItem };