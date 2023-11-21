const axios = require('axios');

async function logar() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    console.log(JSON.stringify({
        email:email,
        senha:senha
    }));

    try {
        const response = await axios.post('http://localhost:3000/cliente', {
          email: email,
          senha: senha
        });
  
        // Faça algo com a resposta (por exemplo, redirecione para outra página)
        console.log('Resposta do servidor:', response.data);
      } catch (error) {
        // Trate os erros, se necessário
        console.error('Erro na requisição:', error);
      }

    // fetch("login",{
    //     method: 'post',
    //     body: JSON.stringify({
    //         email:email,
    //         senha:senha
    //     }),
    //     headers: {"content-type" : "application/json"}
    // })

    // .then(async (resp) => {
    //     var status = await resp.text();
    //     console.log(status)
    //     if(status == 'conectado') {
    //         location.href = '../pags/tela-inicial.html'
    //     }
    //     else {
    //         alert('Email ou senha incorreto!')
    //     }
    // })
}