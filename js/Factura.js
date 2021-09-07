import Electrodomestico from "./Electrodomestico.js";
import Nevera from "./Nevera.js";
import TV from "./TV.js";


function descontarInventaro(producto, cantidad) {
    
    inventario = inventario.filter(function(busqueda) {
        console.log(producto);
        return busqueda.consumo !== producto.consumo; 
    });
    
}

document.getElementById('btnSolicitar').addEventListener('click', function () {

    var producto = document.getElementById("sltTipoElectrodomesticoPedido").value;
    var consumo = document.getElementById('sltConsumoPedido').value;
    var procedencia = document.getElementById('sltProcedenciaPedido').value;
    var cantidad = 0;//document.getElementById('nmbCantidadPedido').value;

    if(producto === "Electrodoméstico"){

        alert("electrodomestico");
        var electrodomestico = new Electrodomestico(consumo,procedencia);
        descontarInventaro(electrodomestico,cantidad);
        
    }else if(producto === "Nevera"){
        alert("nevera");
        var nevera = new Nevera(consumo,procedencia,null);
        descontarInventaro(nevera,cantidad);

    }else{

        alert("tv");
        var tv = new TV (consumo,procedencia,null,null);
        descontarInventaro(tv,cantidad);
        
    }
    
    document.getElementById('formPedido').reset();

    stock(inventario);

});