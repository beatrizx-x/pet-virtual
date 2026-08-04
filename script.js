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
const framesDormindo = [
  "sprite-sheets-3/dormindo/frame1.png",
  "sprite-sheets-3/dormindo/frame2.png",
  "sprite-sheets-3/dormindo/frame4.png",
];

const framesAcordando = [
  "sprite-sheets-3/acordando/frame1.png",
  "sprite-sheets-3/acordando/frame3.png",
  "sprite-sheets-3/acordando/frame4.png"
];

const framesSaindoCama = [
  "sprite-sheets-3/saindoCama/frame1.png",
  "sprite-sheets-3/saindoCama/frame2.png",
  "sprite-sheets-3/saindoCama/frame3.png",
];

const framesIndoAteUsuario = [
  "sprite-sheets-3/indo-usuario/frame1.png",
  "sprite-sheets-3/indo-usuario/frame2.png",
  "sprite-sheets-3/indo-usuario/frame3.png",
];

let animacaoAtual = framesDormindo; 
let indexFrameAtual = 0;

const containerGato = document.getElementById("gato");
const elementoGato = document.getElementById("cat");

function rodarAnimacao() {
  elementoGato.src = animacaoAtual[indexFrameAtual];

  if (animacaoAtual === framesAcordando && indexFrameAtual === framesAcordando.length - 1) {
    iniciarSairDaCama(); 
    return;
  }

  if (animacaoAtual === framesSaindoCama && indexFrameAtual === framesSaindoCama.length - 1) {
    iniciarCaminhadaAteUsuario();
    return;
  }

  indexFrameAtual = (indexFrameAtual + 1) % animacaoAtual.length;
}

setInterval(rodarAnimacao, 150);

setTimeout(() => {
  animacaoAtual = framesAcordando; 
  indexFrameAtual = 0; 
}, 3000); 

function iniciarSairDaCama() {
  animacaoAtual = framesSaindoCama;
  indexFrameAtual = 0;
}

function iniciarCaminhadaAteUsuario() {
  animacaoAtual = framesIndoAteUsuario;
  indexFrameAtual = 0;
  
  containerGato.style.transition = "left 2.5s linear"; 
  containerGato.style.left = "40%"; 
}