import clientePersistence from "../persistence/cliente.persistence.js";

async function logarCliente(email, senha) {
    //regras de negócio
    //chama persistence
    var resultado = null;
    if (await clientePersistence.existeCliente(email)) {
        resultado = await clientePersistence.logarCliente(email, senha)
    }
    return resultado
}

async function criaCliente(nome, email, senha) {
    var resultado = null;
    if (!await clientePersistence.existeCliente(email)) {
        resultado = await clientePersistence.criarCliente(nome, email, senha)
    }

    return resultado
}


export default { criaCliente, logarCliente }