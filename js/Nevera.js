import Electrodomestico from "../js/Electrodomestico.js";

class Nevera extends Electrodomestico {

    constructor(consumo, procedencia, capacidad) {
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    getCapacidad() {
        return this.capacidad;
    }

    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }

    calcularPrecio() {
        let precio = super.calcularPrecio();

        if (this.getCapacidad() > 120) {

            precio = this.litrosExtra(precio);

        }

        return precio;
    }

    litrosExtra(precio) {

        let litrosMas = 0;
        let aumento = precio * 0.05;

        litrosMas = (this.getCapacidad() - 120) / 10;
        
        precio += (Math.floor(litrosMas) * aumento);

        return precio;
    }

}

var nevera = new Nevera("A","Nacional",160);

console.log(nevera.calcularPrecio());
