const formulario = document.querySelector('form'); //recupera o form
const nome = document.querySelector('#nome');//recupera a classe nome
const sobrenome = document.querySelector('#sobrenome');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const confirmaSenha = document.querySelector('#confirma-senha');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();//impede o envio da pagina

    //entra na condição
    if(senha.value!== confirmaSenha.value){
        alert('As senha não coincidem!');
        return;
    }
    const usuario = {//definição de um objeto ussuario
        nome: nome.value,
        sobrenome: sobrenome.value, 
        login: login.value,
        senha: senha.value

    };

    //armazena no navegador localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Cadastro realizado com sucesso!Parabens gata!');


})