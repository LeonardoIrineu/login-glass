let nome = document.querySelector("#nome")

let email = document.querySelector("#email")

let password = document.querySelector("#password")

let confirmPass = document.querySelector("#confirmPass")

let verPassword = document.querySelector("#verPassword")

let verConfirmPass = document.querySelector("#verConfirmPass")

verPassword.addEventListener('click', () => {
    let inputSenha = document.querySelector("#password")

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute("type",'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})

verConfirmPass.addEventListener('click', () => {
    let inputVerSenha = document.querySelector("#confirmPass")

    if (inputVerSenha.getAttribute('type') == 'password'){
        inputVerSenha.setAttribute("type",'text')
    }else{
        inputVerSenha.setAttribute('type','password')
    }
})
