import Electrodomestico from "../js/Electrodomestico.js";

export default class TV extends Electrodomestico {

    constructor(consumo, procedencia, tamanio, isTDT) {
        super(consumo, procedencia);
        this.tamanio = tamanio;
        this.isTDT = isTDT;
    }

    getTamanio() {
        return this.tamanio;
    }

    setTamanio(tamanio) {
        this.tamanio = tamanio;
    }

    getTDT() {
        return this.isTDT;
    }

    setTDT(TDT) {
        this.isTDT = TDT;
    }

    calcularPrecio() {
        let precio = super.calcularPrecio();

        if (this.getTamanio() > 40) {

            precio *= 1.3;

            if (this.getTDT()) {

                precio += 250000;
            }
        } else if (this.getTDT()) {

            precio += 250000;

        }

        return precio;
    }

}
