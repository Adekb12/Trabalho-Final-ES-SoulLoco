import BD from './BD.js'

async function getTodosCliente(){ 
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("select* from cliente");
        console.log(query.rows)
        resultado = query.rows;
    }catch (err){
        console.log(err)
    }finally{
        conn.release()
    }

    return resultado
}

async function getUmCliente(cpf){ 
    // conectar no BD
    // executar operação SQL
    
    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("select * from cliente where cpf=$1", [cpf]);
        console.log(query.rows)
        resultado = query.rows;
    }catch (err){
        console.log(err)
    }finally{
        conn.release()
    }

    return resultado
}

async function criaCliente(cpf, nome, salario, nasc){
    // conectar no BD
    // executar operação SQL
    
    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("insert into cliente (cpf, nome, salario, nasc) values ($1, $2, $3, $4) returning *", [cpf, nome, salario, nasc]);
        console.log(query.rows)
        resultado = query.rows;
    }catch (err){
        console.log(err)
    }finally{
        conn.release()
    }

    return resultado
}

async function excluiCliente(cpf){ 
    // conectar no BD
    // executar operação SQL
    
    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("delete from cliente where cpf=$1 returning *", [cpf]);
        console.log(query.rows)
        resultado = query.rows;
    }catch (err){
        console.log(err)
    }finally{
        conn.release()
    }

    return resultado
}

async function alteraCliente(cpfNew, nome, salario, nasc, cpfOld){
    // conectar no BD
    // executar operação SQL
    
    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("update cliente set cpf=$1, nome=$2, salario=$3, nasc=$4 where cpf=$5 returning *", [cpfNew, nome, salario, nasc, cpfOld]);
        console.log(query.rows)
        resultado = query.rows;
    }catch (err){
        console.log(err)
    }finally{
        conn.release()
    }

    return resultado
}

export default {getTodosCliente, criaCliente, getUmCliente, excluiCliente, alteraCliente}