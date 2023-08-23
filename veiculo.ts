
export abstract class Veiculos{
    marca:string;
    modelo:string;

    constructor(_marca:string, _modelo:string){

        this.marca = _marca;
        this.modelo = _modelo;
    }

    seApresentar(){
        console.log(this.marca, this.modelo)
    }
}


