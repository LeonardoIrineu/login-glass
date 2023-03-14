let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

let logado = document.querySelector("#logado")

logado.innerHTML = `Obrigado ${usuarioLogado.nome}`

function sair(){
    window.location.href = '/index.html'
}