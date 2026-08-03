let estaAceso = false;

function ficarnoite() {
  let abajurAceso = document.getElementById("abajur");
  let fundo = document.getElementById("noite");
  let container = document.querySelector(".container");

  if (estaAceso) {
    abajurAceso.src = "sprites-sheets-object/abajur_apagada.png";
    fundo.style.backgroundImage =
      "url('sprites-sheets-object/fundolimpo1.png')";

    container.classList.remove("modo-noite");
    estaAceso = false;
  } else {
    abajurAceso.src = "sprites-sheets-object/abajuracesa.png";
    fundo.style.backgroundImage = "url('sprites-sheets-object/fundonoite.png')";

    container.classList.add("modo-noite");
    estaAceso = true;
  }
}
window.addEventListener("load", () => {
  const cat = document.getElementById("cat");

  let larguraImagem = 400;
  let totalFrames = 4;
  let larguraFrame = larguraImagem / totalFrames;
  let frame = 0;
let posicaoX = 0
  function animar() {
    cat.style.left = -(frame * larguraFrame) + "px";

    frame++;

    if (frame >= totalFrames) {
      frame = 0;
    }
  }

  let intervalo = setInterval(animar, 300);

  setTimeout(() => {
    // troca sprite
    cat.src = "sprites-sheets-2/03-wake-transparent.png";

    // reseta animação
    frame = 0;
    cat.style.left = "0px";

    larguraImagem = 400;
    totalFrames = 4;
    larguraFrame = larguraImagem / totalFrames;
  }, 3000);

  setTimeout(() => {
    // troca sprite
    cat.src = "sprites-sheets-2/01-idle.png";

    // reseta animação
    frame = 0;
    cat.style.left = "0px";

    larguraImagem = 400;
    totalFrames = 4;
    larguraFrame = larguraImagem / totalFrames;
  }, 6000);

});
