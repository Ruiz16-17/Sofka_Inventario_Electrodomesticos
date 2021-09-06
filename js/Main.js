import Electrodomestico from "./Electrodomestico.js";
import Nevera from "./Nevera.js";
import TV from "./TV.js";

function asignarDatosElectrodomestico(consumo,procedencia) {

    var electrodomestico = new Electrodomestico(consumo,procedencia);
    return electrodomestico;

}

function asignarDatosNevera(consumo,procedencia) {

    let capacidad = document.getElementById("txtCapacidad").value;

    let nevera = new Nevera(consumo,procedencia,capacidad);

    return nevera;
}

function asignarDatosTv(consumo,procedencia) {
    
    let isTDT = document.getElementById("sltIsTDT").value;
    let tamanio = document.getElementById("txtTamanio").value;

    var tv = new TV(consumo,procedencia,tamanio,isTDT);

    return tv;

}

document.getElementById('form').addEventListener('submit', function () {

    var producto = document.getElementById("sltTipoElectrodomestico").value;
    var consumo = document.getElementById('sltConsumo').value;
    var procedencia = document.getElementById('sltProcedencia').value;

    var precio = 0;

    if(producto === "Electrodoméstico"){

        var electrodomestico = asignarDatosElectrodomestico(consumo,procedencia);

        precio = electrodomestico.calcularPrecio();
        
    }else if(producto === "Nevera"){
        
        var nevera = asignarDatosNevera(consumo,procedencia);
        
        precio = nevera.calcularPrecio();
    }else{

        var tv = asignarDatosTv(consumo,procedencia);
        precio = tv.calcularPrecio();
    }
    
    alert(precio);
});