function tocaSom(seletor){

    const elemento = document.querySelector(seletor); 

    if(elemento && elemento.localName === 'audio'){

        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }

}

const listaDeTeclas =  document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa'); 
        }

        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }
    }

}

// let contador = 0;
// while (contador < listaDeTeclas.length) {
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     // template string
//     const idAudio = `#som_${instrumento}`;
//    // console.log(idAudio);
//     tecla.onclick = function (){
//         tocaSom(idAudio);
//     }
//     contador++;

//     // console.log(contador);

// }

