//Muda a velocidade do carrosel
const myCarouselElement = document.getElementById("myCarousel")
const Carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 500,
  touch: false,
})

//Função para retonar à Página Inicial a partir da logo
function irParaPaginaInicial() {

  window.location.href = "../../index.html";
}

