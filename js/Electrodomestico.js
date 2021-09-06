export default class Electrodomestico{

    constructor(consumo, procedencia){

        this.consumo = consumo;
        this.procedencia = procedencia;
    }

    getConsumo(){
        return this.consumo;
    }

    setConsumo(consumo){
        this.consumo = consumo;
    }

    getProcedencia(){
        return this.procedencia;
    }

    setProcedencia(procedencia){
        this.procedencia = procedencia;
    }

    asignarValorConsumo(opcion) {

        let precio = 0;

        switch (opcion) {
            case 'A':

                precio = 450000;
                break;

            case 'B':

                precio = 350000;
                break;

            case 'C':

                precio = 250000;
                break;
            default:

                precio = 0;
        }

        return precio;
    }

    asignarValorProcedencia(opcion) {

        let precio = 0;

        switch (opcion) {
            case "Nacional":

                precio = 250000;
                break;

            case "Importado":

                precio = 350000;
                break;

            default:

                precio = 0;
        }

        return precio;
    }

    calcularPrecio() {

        return this.asignarValorConsumo(this.getConsumo()) + this.asignarValorProcedencia(this.getProcedencia());
    }

}

    
    

