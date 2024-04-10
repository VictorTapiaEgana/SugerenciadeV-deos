# Sugerencias de Video

 Implementacion de polimorfismo y patrones de modulo.

  Permite al crear una instancia de la clase Reproductor posicionar y reproducir los videos sugereridos
```bash
  const video1 = new Reproductor('https://youtube.com/embed/kuiBaqDVRkE','musica')
 ```

 la clase Reproductor, recibe al URL del Video y la Categoria.

- Clase Multimedia.js
 ``` bash
 export class Multimedia{
    constructor (url){
        this._url = url;
    }

    getUrl(){
        return this._url;
    }

    setInicio(){
        return `Este Metodo es para realizar un cambio de la URL del video.`;
    }
}   
 ```

- Clase Reproductor.js
 ``` bash
    import { Multimedia } from "./Multimedia.js"
    import { cargarVideo } from "./script.js"

    export class Reproductor extends Multimedia{
        constructor(url,id){
            super(url)
            this._id = id;
        }

        playMultimedia(){
            cargarVideo.DatosVideo (this._url,this._id)         
        }
        
        setInicio(tiempo_inicio){

            $(`#${this._id}`).attr('src',`${this._url}?start=${tiempo_inicio * 60}`);
        
        }
    }

 ``` 
 - Script.js
 ``` bash
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

 ``` 

