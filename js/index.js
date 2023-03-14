let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")

let password = document.querySelector("#password")
let labelPassword = document.querySelector('#labelPassword')

let verPassword = document.querySelector("#verPassword")

let error = document.querySelector("#error")

let sucesso = document.querySelector("#sucesso")


function entrar() {
    let listaCadastro = []

    let listaValidaCadastro = {
        nome: '',
        email: '',
        password: ''
    }

    listaCadastro = JSON.parse(localStorage.getItem('listaCadastro'))

    listaCadastro.forEach((item) => {
        if (email.value == item.emailCad && password.value == item.passwordCad) {
            listaValidaCadastro = {
                nome: item.nomeCad,
                email: item.emailCad,
                password: item.passwordCad
            }
        }
    })

    if (email.value == listaValidaCadastro.email && password.value == listaValidaCadastro.password) {
        
        window.location.href = '/html/bv.html'
        localStorage.setItem('usuarioLogado', JSON.stringify(listaValidaCadastro))

    } else {
        labelEmail.setAttribute('style','color:red')
        labelPassword.setAttribute('style','color:red')
        error.setAttribute('style','display:block')
        error.innerHTML ='E-mail ou senha invalidos.'
        email.focus()
    }

}

verPassword.addEventListener('click', () => {
    let inputSenha = document.querySelector("#password")

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute("type", 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})