function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

 }
  //enquanto
 //let contador = 0;
//while (contador < listaDeTeclas.length) {
 //   const tecla = listaDeTeclas[contador];
  //  const instrumento = tecla.classList[1];
    //template string
   // const idAudio = `#som_${instrumento}`;

  //  tecla.onclick = function () {
   //     tocaSom(idAudio);
   // };

   // contador = contador + 1;
 // }