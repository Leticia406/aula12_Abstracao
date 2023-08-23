import { Veiculos } from "./veiculo";

class Moto extends Veiculos{
    cilindros:number;

    constructor(_cilindros, _marca, _modelo){
        super(_marca, _modelo)
        this.cilindros =_cilindros;
    }
}

let moto = new Moto(6,'honda','Hornet');
moto.seApresentar()