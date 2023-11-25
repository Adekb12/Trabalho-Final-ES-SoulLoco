import usuariosPersistence from "../persistence/usuarios.persistence.js";

async function logaUsuario(email, senha) {

    var resultado = null;
    var usuario = null;
    //verifica se o email existe para logar 
    if (await usuariosPersistence.existeUsuario(email)) {
        resultado = await usuariosPersistence.logarUsuario(email, senha)
    } else {
        console.log("Aqui")
        resultado = { success: false, usuario, mensagem: "Email nao cadastrado" }
    }
    return resultado
}

async function cadastrarCliente(nome, email, senha, isCliente) {
    var resultado = null;
    //verifica se o email nao existe para cadastrar 
    if (!await usuariosPersistence.existeUsuario(email)) {
        resultado = await usuariosPersistence.cadastrarCliente(nome, email, senha, isCliente)
    }
    return resultado
}


export default { cadastrarCliente, logaUsuario }