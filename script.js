const botoes = document.querySelectorAll(".comprar")

botoes.forEach(function(botao){

botao.addEventListener("click", function(){

let produto = botao.getAttribute("data-produto")

let numero = "5561999999999"

let mensagem = "Olá quero comprar o " + produto

let link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem)

window.open(link, "_blank")

})

})