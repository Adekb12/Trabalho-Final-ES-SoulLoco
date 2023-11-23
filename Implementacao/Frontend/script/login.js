import * as axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

window.logar = logar;
async function logar() {
  var email = document.getElementById('idemail').value
  var senha = document.getElementById('idsenha').value

  // console.log(JSON.stringify({
  //   email: email,
  //   senha: senha
  // }));
  console.log(email)

  try {
    const response = await axios.post(`http://localhost:3000/cliente`, {
      email: email,
      senha: senha
    });

    // Faça algo com a resposta (por exemplo, redirecione para outra página)
    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    // Trate os erros, se necessário
    console.error('Erro na requisição:', error);
  }
}

window.cadastrar = cadastrar;
async function cadastrar() {
  var nome = document.getElementById('idnome').value
  var email = document.getElementById('idemail').value
  var senha = document.getElementById('idsenha').value

  console.log(email)

  try {
    const response = await axios.post(`http://localhost:3000/cliente?email=${email}`, {
      nome: nome,
      senha: senha
    });

    // Faça algo com a resposta (por exemplo, redirecione para outra página)
    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    // Trate os erros, se necessário
    console.error('Erro na requisição:', error);
  }

}

export default {logar, cadastrar};