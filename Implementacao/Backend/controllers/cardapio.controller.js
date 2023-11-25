import cardapioServices from '../services/cardapio.services.js'

async function visualizarItens(req, res) {
    var resultado = null
    resultado = await cardapioServices.visualizarItens()
    console.log(resultado)
    res.send(JSON.stringify(resultado))
}

async function adicionarItem(req, res) {
    const nome = req.body.nome;
    const imagem = req.body.imagem;
    const descricao = req.body.descricao;
    const preco = parseFloat(req.body.preco).toFixed(2);

    //validação do preço do item e do nome
    var resultado = null;
    if (ehPrecoValido(preco) && ehNomeValido(nome)) {
        resultado = await cardapioServices.adicionarItem(nome, imagem, descricao, preco);
    }

    res.send(resultado)
}

function ehPrecoValido(preco) {
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
    const idItem = req.params.idItem;
    var resultado = null
    resultado = await cardapioServices.removerItem(idItem);
    res.send(resultado)
}

async function alterarItem(req, res) {
    const idItem = req.params.idItem;
    const nome = req.body.nome;
    const imagem = req.body.imagem;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    console.log(preco)

    //valida o nome e o preco que vai ser alterado e faz a chamada para Services
    var resultado = null;
    if (ehPrecoValido(preco) && ehNomeValido(nome)) {
        resultado = await cardapioServices.alterarItem(idItem, nome, imagem, descricao, preco);
    } else {
        console.log(ehPrecoValido(preco))
        resultado = { success: false, mensagem: "Preço inválido!" };
    }
    res.send(resultado)
}

function ehNomeValido(nome) {
    if (nome == ' ' || nome.size > 100) {
        return false;
    }
    return true;
}

export default { visualizarItens, adicionarItem, removerItem, alterarItem };