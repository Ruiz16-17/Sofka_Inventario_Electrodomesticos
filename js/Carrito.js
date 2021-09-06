import Electrodomestico from "../js/Electrodomestico.js";
import Nevera from "../js/Nevera.js";
import TV from "../js/TV.js";

function operarElectrodomestico(consumo,procedencia) {

    var electrodomestico = new Electrodomestico(consumo,procedencia);
    return electrodomestico.calcularPrecio();

}

function operarNevera(consumo,procedencia) {

    let capacidad = document.getElementById("txtCapacidad").value;

    let nevera = new Nevera(consumo,procedencia,capacidad);

    return nevera.calcularPrecio();
}

function operarTv(consumo,procedencia) {
    
    let isTDT = document.getElementById("sltIsTDT").value;
    let tamanio = document.getElementById("txtTamanio").value;

    var tv = new TV(consumo,procedencia,tamanio,isTDT);

    return tv.calcularPrecio();

}

document.getElementById('form').addEventListener('submit', function () {

    var producto = document.getElementById("sltTipoElectrodomestico").value;
    var consumo = document.getElementById('txtConsumo').value;
    var procedencia = document.getElementById('txtProcedencia').value;

    var precio = 0;

    if(producto === "Electrodoméstico"){

        precio = operarElectrodomestico(consumo,procedencia);
        
    }else if(producto === "Nevera"){
        
        precio = operarNevera(consumo,procedencia);
    
    }else{

        precio = operarTv(consumo,procedencia);
    }
    
    alert(precio);
});