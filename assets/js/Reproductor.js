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