import { Reproductor } from "./Reproductor.js";

export const cargarVideo = (()=>{
      
     function renderizarDom (url,id){
       $(`#${id}`).attr('src',url);
     };

    return{
         DatosVideo:(vidUrl,vidId)=>{
            renderizarDom (vidUrl,vidId)
         }
    }     

})();

const video1 = new Reproductor('https://youtube.com/embed/kuiBaqDVRkE','musica')
const video2 = new Reproductor('https://youtube.com/embed/-Io5NKsJ1jA','peliculas')
const video3 = new Reproductor('https://youtube.com/embed/2gTC4uWP3_Y','series')

video1.playMultimedia()
video2.playMultimedia()
video3.playMultimedia()

video1.setInicio(1)