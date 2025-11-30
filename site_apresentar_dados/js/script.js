var nome = document.querySelector("#txNome")
var sobrenome = document.querySelector("#txSobrenome")
var email = document.querySelector("#txEmail")
var dta = document.querySelector("#txDta")
var fone = document.querySelector("#txFone")
var assunto = document.querySelector("#txAssunto")
var mensagem = document.querySelector("#txMensagem")

var btDados = document.querySelector("button")
var resultado = document.querySelector("#resultado")

btDados.addEventListener('click',exibirDados)

function exibirDados(){
    //alert("Teste com o click do botão")

    resultado.innerHTML = `
        <p> Nome: ${nome.value} </p>
        <p> Sobrenome: ${sobrenome.value} </p>
        <p> E-mail: ${email.value} </p>
        <p> Data de Nascimento: ${dta.value} </p>
        <p> Telefone: ${fone.value} </p>   
        <p> Assunto: ${assunto.value} </p>   
        <p> Mensagem: ${mensagem.value} </p>
    `
}