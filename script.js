let estaAceso = false;

function ficarnoite() {
  let abajurAceso = document.getElementById("abajur");
  let fundo = document.getElementById("noite");
  let container = document.querySelector(".container");

  if (estaAceso) {
   
    abajurAceso.src = "sprites-sheets-object/abajur_apagada.png";
    fundo.style.backgroundImage = "url('sprites-sheets-object/fundolimpo1.png')";
    
    container.classList.remove("modo-noite"); 
    estaAceso = false;
  } else {
    
    abajurAceso.src = "sprites-sheets-object/abajuracesa.png";
    fundo.style.backgroundImage = "url('sprites-sheets-object/fundonoite.png')";
    
    container.classList.add("modo-noite"); 
    estaAceso = true;
  }
}