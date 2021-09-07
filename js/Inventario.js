var inventario = [];

function stock(arreglo){

    var procedenciaStock = ["Nacional","Importado"];
    var consumoStock = ["A","B","C"];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            
            stockElectrodomestico(arreglo,procedenciaStock[j],consumoStock[i]);
            stockTv(arreglo,procedenciaStock[j],consumoStock[i]);
            stockTvTdt(arreglo,procedenciaStock[j],consumoStock[i]);
            stockTvMayor40(arreglo,procedenciaStock[j],consumoStock[i]);
            stockTvMayor40_Tdt(arreglo,procedenciaStock[j],consumoStock[i]);
            stockNevera(arreglo,procedenciaStock[j],consumoStock[i]);
            stockNeveraMayor120(arreglo,procedenciaStock[j],consumoStock[i]);
        }
    }

    
}

function stockElectrodomestico(arreglo,procedencia,consumo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {
        
        if(arreglo[index].consumo === consumo && arreglo[index].procedencia === procedencia){

            cantidad++;
        }
    }

    document.getElementById("electrodomestico"+procedencia+"Consumo"+consumo).innerHTML = cantidad;

    return cantidad;
}

function stockTv(arreglo,procedencia,consumo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {
        
        if(arreglo[index].consumo === consumo && arreglo[index].procedencia === procedencia && arreglo[index].tamanio < 40 && arreglo[index].isTDT === false){

            cantidad++;
        }
    }

    document.getElementById("tv"+procedencia+"Consumo"+consumo).innerHTML = cantidad;

    return cantidad;
}

function stockTvTdt(arreglo,procedencia,consumo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {

        if(arreglo[index].isTDT && arreglo[index].consumo === consumo && arreglo[index].procedencia === procedencia && arreglo[index].tamanio < 40){

            cantidad++;
        }
    }

    document.getElementById("tv"+ procedencia +"Consumo" + consumo + "_Tdt").innerHTML = cantidad;

    return cantidad;
}

function stockTvMayor40(arreglo,procedencia,consumo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {

        if(arreglo[index].isTDT === false && arreglo[index].consumo === consumo && arreglo[index].procedencia === procedencia && arreglo[index].tamanio > 40){

            cantidad++;
        }
    }

    document.getElementById("tv"+ procedencia +"Consumo" + consumo + "_Mayor40").innerHTML = cantidad;

    return cantidad;
}

function stockTvMayor40_Tdt(arreglo,procedencia,consumo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {

        if(arreglo[index].isTDT && arreglo[index].consumo === consumo && arreglo[index].procedencia === procedencia && arreglo[index].tamanio > 40){

            cantidad++;
        }
    }

    document.getElementById("tv"+procedencia+"Consumo"+consumo+"_Mayor40_Tdt").innerHTML = cantidad;
    
    return cantidad;
}

function stockNevera(arreglo,procedencia,consumo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {

        if(arreglo[index].capacidad < 120 && arreglo[index].consumo === consumo && arreglo[index].procedencia === procedencia){

            cantidad++;
        }
    }

    document.getElementById("nevera"+procedencia+"Consumo"+consumo).innerHTML = cantidad;
    
    return cantidad;
}

function stockNeveraMayor120(arreglo,procedencia,consumo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {

        if(arreglo[index].capacidad > 120 && arreglo[index].consumo === consumo && arreglo[index].procedencia === procedencia){

            cantidad++;
        }
    }

    document.getElementById("nevera"+procedencia+"Consumo"+consumo+"_Mayor120").innerHTML = cantidad;
    
    return cantidad;
}

function agregar_a_Inventario(cantidad, producto) {
    
    for (let index = 0; index < cantidad; index++) {
        
        inventario.push(producto);
        
    }
}