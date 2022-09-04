

tocaSom = (idElementAudio) => {
    document.querySelector(idElementAudio).play();
     
}


 const listaTeclas = document.querySelectorAll('.tecla')

 for (let index = 0; index < listaTeclas.length; index++) { 
    const tecla = listaTeclas[index];
    const timbre = tecla.classList[1];
    const idAudio = `#som_${timbre}`;

    tecla.onclick = () => {
        tocaSom(idAudio)
    }

    
 }

   