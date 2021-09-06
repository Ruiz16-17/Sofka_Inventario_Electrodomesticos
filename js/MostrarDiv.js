function mostrarDiv(mostrar) {
    if (mostrar.value=="Nevera"){
        divNevera = document.getElementById("divNevera");
        divNevera.style.display = "";

        divTv = document.getElementById("divTv");
        divTv.style.display = "none";

    }else if (mostrar.value=="TV"){

        divNevera = document.getElementById("divNevera");
        divNevera.style.display="none";

        divTv = document.getElementById("divTv");
        divTv.style.display = "";
    }else{

        divNevera = document.getElementById("divNevera");
        divTv = document.getElementById("divTv");

        divTv.style.display = "none";
        divNevera.style.display="none";
    }
}


