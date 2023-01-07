export const getPuntos = (idArticulo, cantidad) => {
    
    try {
        let puntos = 0;

        switch(idArticulo){
            case 1:
                puntos = 4;
                break;
            case 2:
                puntos = 3;
                break;
            case 3:
                puntos = 2;
                break;
            case 4:
                puntos = 1;
                break;
            default:
                puntos = 0;
                break;
    }

    const puntosTotales = puntos * cantidad;

        return { puntosTotales };
    } catch (error) {
        console.log(error);
    }
};