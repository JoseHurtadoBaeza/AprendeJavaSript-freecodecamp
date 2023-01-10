function seleccionarIdioma(valor){
    var idioma;

    /*if (valor == 1){
        idioma = "Español";
    } else if (valor == 2){
        idioma = "Francés";
    } else if (valor == 3){
        idioma = "Italiano";
    } else {
        idioma = "Inglés";
    }*/

    // Reemplazamos el código de if-else por este switch
    switch(valor){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Inglés";
            break;
    }

    return idioma;
}

