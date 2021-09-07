var inventario = [];

function stockTvTDT(arreglo) {
    var cantidad = 0;
    for (let index = 0; index < arreglo.length; index++) {

        if(arreglo[index].isTDT){

            cantidad++;
        }
    }

    return cantidad;
}

