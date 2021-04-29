export class ImagenBoton
{
    id:number;
    nombreBoton:string;
    caminoImagen:string;
    

   constructor(pNombreBoton:string, pCaminoImagen:string){
      
        this.nombreBoton = pNombreBoton;
        this.caminoImagen = pCaminoImagen;
    }
}