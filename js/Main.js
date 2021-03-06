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
    
    var tv = new TV();

    var isTDT = document.getElementById("sltIsTDT").value;
    let tamanio = document.getElementById("txtTamanio").value;

    if(isTDT == "true"){
        tv.setTDT(true);
    }else{
        tv.setTDT(false);
    }

    tv.setConsumo(consumo);
    tv.setProcedencia(procedencia);
    tv.setTamanio(tamanio)

    return tv;

}

document.getElementById('btnIngresar').addEventListener('click', function () {

    var producto = document.getElementById("sltTipoElectrodomestico").value;
    var consumo = document.getElementById('sltConsumo').value;
    var procedencia = document.getElementById('sltProcedencia').value;
    var cantidad = document.getElementById('nmbCantidad').value;

    if(producto === "Electrodoméstico"){

        var electrodomestico = asignarDatosElectrodomestico(consumo,procedencia);

        agregar_a_Inventario(cantidad,electrodomestico);
        
    }else if(producto === "Nevera"){
        
        var nevera = asignarDatosNevera(consumo,procedencia);

        agregar_a_Inventario(cantidad,nevera);

    }else{

        var tv = asignarDatosTv(consumo,procedencia);
        
        agregar_a_Inventario(cantidad,tv);

    }
    
    document.getElementById('form').reset();

    mostrarDivElectrodomesticos('');

    stock(inventario);
});