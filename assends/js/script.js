/*
por onde da para acessar o dom 
Case Sensetive = reconhece letras maiusculas e minusculas
por tag:getElementByTagName()
por id :getElementById()
por nome :getElementByclassName()
por classe:getElementsByClasseName()
por seletor: querySelector()
*/ 

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false 
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
       txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}


function validaEmail(){
    let txtEmail = document.querySelector('txtEmail')
    if(nome.value.indexOf('@') == -1 || email.value.indexOf ('.')){
       txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 150){
        txtAssunto.innerHTML = 'Seu Texto é muito grande,digite um texto com mo máximo 150 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }
}

function enviar(){
if (nomeOk == true && emailOk == true && assunto ==true){
    alert ('Formulário enviado com sucesso!')
}else{
    alert ('Preencha o formulário corretamente antes de enviar ...')
}
}

function mapaZoom (){
 mapa.style.width = '900px'
 mapa.style.height = '800px'
}

function mapaNormal(){
 mapa.style.width = '400px'
 mapa.style.height = '300px'
}