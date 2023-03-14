let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")

let password = document.querySelector("#password")
let labelPassword = document.querySelector("#labelPassword")
let validPassword = false

let confirmPass = document.querySelector("#confirmPass")
let labelConfirmPass = document.querySelector("#labelConfirmPass")
let validConfirmPass = false

let verPassword = document.querySelector("#verPassword")

let verConfirmPass = document.querySelector("#verConfirmPass")

let error = document.querySelector("#error")

let sucesso = document.querySelector("#sucesso")

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 3 && nome.value.length >= 1) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Minimo de 3 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color:white')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if (!email.checkValidity()) {
        labelEmail.setAttribute("style", 'color:red')
        labelEmail.innerHTML = 'Digite um e-mail valido'
        validEmail = false
    } else {
        labelEmail.setAttribute("style", "color:white")
        labelEmail.innerHTML = 'E-mail'
        validEmail = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 7 && password.value.length >= 1) {
        labelPassword.setAttribute("style", "color:red")
        labelPassword.innerHTML = 'A senha deve conter 8 caracteres'
        validPassword = false
    } else {
        labelPassword.setAttribute("style", 'color:white')
        labelPassword.innerHTML = 'Password'
        validPassword = true
    }
})

confirmPass.addEventListener('keyup', () => {
    if (password.value != confirmPass.value) {
        labelConfirmPass.setAttribute("style", "color:red")
        labelConfirmPass.innerHTML = 'As devem ser iguais'
        validConfirmPass = false
    } else {
        labelConfirmPass.setAttribute("style", 'color:white')
        labelConfirmPass.innerHTML = 'Confirm Password'
        validConfirmPass = true
    }
})


function cadastrar() {
    if (validNome && validEmail && validPassword && validConfirmPass) {
        let listaCadastro = JSON.parse(localStorage.getItem('listaCadastro') || '[]')

        listaCadastro.push({
            nomeCad: nome.value,
            emailCad: email.value,
            passwordCad: password.value
        })

        localStorage.setItem('listaCadastro', JSON.stringify(listaCadastro))

        sucesso.setAttribute("style", 'display:block')
        sucesso.innerHTML = 'Cadastrando...'
        error.setAttribute('style', 'display:none')
        error.innerHTML = ''

        setTimeout(() => {
            window.location.href = '/index.html'
        }, 3000)
    } else {
        error.setAttribute("style", 'display:block')
        error.innerHTML = '<strong>Preencha os campos corretamente</strong>'
        sucesso.setAttribute("style", 'display:none')
        sucesso.innerHTML = ''
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

verConfirmPass.addEventListener('click', () => {
    let inputVerSenha = document.querySelector("#confirmPass")

    if (inputVerSenha.getAttribute('type') == 'password') {
        inputVerSenha.setAttribute("type", 'text')
    } else {
        inputVerSenha.setAttribute('type', 'password')
    }
})