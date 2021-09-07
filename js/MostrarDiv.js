function mostrarDivElectrodomesticos(mostrar,idNevera, idTV) {
    if (mostrar.value=="Nevera"){
        divNevera = document.getElementById(idNevera);
        divNevera.style.display = "";

        divTv = document.getElementById(idTV);
        divTv.style.display = "none";

    }else if (mostrar.value=="TV"){

        divNevera = document.getElementById(idNevera);
        divNevera.style.display="none";

        divTv = document.getElementById(idTV);
        divTv.style.display = "";

    }else{

        divNevera = document.getElementById("divNevera");
        divTv = document.getElementById("divTv");

        divTv.style.display = "none";
        divNevera.style.display="none";
    }
}

function mostrarOcultar(idDiv,accion) {

    divInventario = document.getElementById(idDiv);
    divInventario.style.display = accion;
}
