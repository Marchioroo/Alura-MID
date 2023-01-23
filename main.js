// Pom ----------------------------------------
function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);
   
    
    if(elemento != null && elemento.localName ==='audio'){
      elemento.play();
      console.log('Você tocou a tecla ' + seletorAudio.substring(11));
    }else{
      console.log('Elemento não encontrado ou seletor inválido')
    }

   
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador= 0; contador < listaDeTeclas.length;contador++){ 

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio =  `#som_${instrumento}`;
    
     tecla.onclick = function(){
            tocaSom(idAudio);
     };

     tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        console.log(evento)
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
    
}