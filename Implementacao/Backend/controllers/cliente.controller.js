import clienteServices from '../services/cliente.services.js'

async function getTodosCliente(req, res){ //request e response 
    //capturar os dados
    //validar os dados
    //chamar a camada Services

    const resultado = await clienteServices.getTodosCliente()

    res.send(JSON.stringify(resultado))
}

async function getUmCliente(req, res){ 
    //capturar os dados 
    const cpf = req.params.cpf;
    //validar os dados
    var resultado = null
    if(cpfValido(cpf)){
        //chamar a camada Services
        resultado = await clienteServices.getUmCliente(cpf);
    }

    res.send(resultado)
}

function cpfValido(cpf){
    return true;
}

async function criaCliente(req, res){
    const cpf = req.body.cpf;
    const nome = req.body.nome;
    const salario = req.body.salario;
    const nasc = req.body.nasc;

    //validar os dados
    
    //chamada para Services
    const resultado = await clienteServices.criaCliente(cpf, nome, salario, nasc);
    res.send(resultado)
}

async function excluiCliente(req, res){
    const cpf = req.params.cpf;
    //validar os dados
    var resultado = null
    if(cpfValido(cpf)){
        //chamar a camada Services
        resultado = await clienteServices.excluiCliente(cpf);
    }
    res.send(resultado)
}

async function alteraCliente(req, res){
    const cpfNew = req.body.cpf;
    const nome = req.body.nome;
    const salario = req.body.salario;
    const nasc = req.body.nasc;
    const cpfOld = req.params.cpf;
    //validar os dados
    
    //chamada para Services
    const resultado = await clienteServices.alteraCliente(cpfNew, nome, salario, nasc, cpfOld);
    res.send(resultado)
}

export default {getTodosCliente, criaCliente, getUmCliente, excluiCliente, alteraCliente};