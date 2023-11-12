import clientePersistence from "../persistence/cliente.persistence.js";

async function getTodosCliente(){ 
    //regras de negócio
    //chama persistence
    return await clientePersistence.getTodosCliente()
}

async function getUmCliente(cpf){ 
    //regras de negócio
    //chama persistence
    return await clientePersistence.getUmCliente(cpf)
}

async function criaCliente(cpf, nome, salario, nasc){
    // //regras de negócio
    // var cliente = null;
    // cliente = await getUmCliente(cpf)
    // //chama persistence
    // var resultado = null;
    // if(cliente === null){
    //     resultado = await clientePersistence.criaCliente(cpf,nome,salario,nasc)
    // }
    var resultado = null;
    resultado = await clientePersistence.criaCliente(cpf,nome,salario,nasc)
    return resultado
}

async function excluiCliente(cpf){ 
    //regras de negócio
    //chama persistence
    return await clientePersistence.excluiCliente(cpf)
}

async function alteraCliente(cpfNew, nome, salario, nasc, cpfOld){
    var resultado = null;
    resultado = await clientePersistence.alteraCliente(cpfNew,nome,salario,nasc,cpfOld)
    return resultado
}

export default {getTodosCliente, criaCliente, getUmCliente, excluiCliente, alteraCliente}