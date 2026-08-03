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
//animação do gato

window.addEventListener("load", () => {
  const catImage = document.getElementById("cat");
  let frame = 0;
  let totalFrames = 4; 
  let intervalo;

  // Função central para trocar o sprite e reiniciar a animação
  function trocarSprite(novaUrl, numeroDeFrames) {
    // 1. Para a animação atual
    clearInterval(intervalo);
    
    // 2. Troca a imagem
    catImage.src = novaUrl;
    
    // 3. Reseta os cálculos
    frame = 0;
    totalFrames = numeroDeFrames;
    catImage.style.left = "0%";
    catImage.style.width = (numeroDeFrames * 100) + "%";

    // 5. Reinicia o ciclo de animação
    intervalo = setInterval(animar, 300);
  }

  function animar() {
    catImage.style.left = -(frame * 100) + "%";
    frame++;
    if (frame >= totalFrames) {
      frame = 0;
    }
  }

  // --- Início do Ciclo ---
  
  // 1. Começa com a animação 

  trocarSprite(catImage.src, 4); 

  setTimeout(() => {
    trocarSprite("sprites-sheets-2/03-wake-transparent.png", 4);
  }, 3000);

  setTimeout(() => {
    trocarSprite("sprites-sheets-2/01-idle.png", 4); 
  }, 6000);
});