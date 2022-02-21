console.log("Iniciando ");

alert("Ejercicio desafio: \n Juego de Piedra, papel y tijera");

    // calculamos un número aleatorio  para la pc
    function numeroski(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // sumamos puntos
    function sumarPuntoPc() {
        resultadoPc = resultadoPc + 1;
        console.log("La PC gano un punto"); 
        return resultadoPc;
    }

    // sumamos puntos
    function sumarPuntoVos() {
        resultadoVos = resultadoVos + 1;
        console.log("Ganaste un punto"); 
        return resultadoVos;
    }

    // preguntamos si seguir jugando
    function seguirJugando() {
        let ok = prompt("Quieres seguir jugando ? \n Si o No").toLowerCase();
        if (ok == "si") {
            vuelta = 0;
            resultadoVos = 0;
            resultadoPc = 0;
            console.log("Seleccionaste seguir jugando"); 
        } else {
            alert("Fue un placer jugar con vos perreke");
            vuelta = 3;
            console.log("Fin del juego"); 
        } 
    }

    // buscamos al ganador
    function final() {

        if (resultadoPc == 2) {
            alert("Lo siento "+ dataDos +" te gane: \n Atte: la pc");
            console.log("Gano la pc"); 
            seguirJugando();
        } else if(resultadoVos == 2){
            alert("oh Rayos, parece que me ganaste "+ dataDos);
            console.log("Enhorabuena! ganaste perreke"); 
            seguirJugando();
        } 

        return final;
    }
    
    // variables del juego
    let resultadoVos = 0;
    let resultadoPc = 0;
    let vuelta = 0;

    let dataDos = prompt("ingresa tu nombre");
    alert("Hola!!! soy muy bueno en este juego (La Pc), "+ dataDos +" vamos a la batalla ");
    console.log("Bienvenido "+ dataDos); 

    // bucle para poder seguir jugando
    while (vuelta < 3) {
         
        // sumamos las partidas jugadas
        vuelta = vuelta + 1;

        // calculo el numero de la pc entre 1 y 3
        let dataPc = numeroski(1,3); 
        
        // seleccionamos la jugada
        let data = parseFloat(prompt("Ingresa tu jugada en números: \n 1 = Piedra \n 2 = Papel \n 3 = Tijera"));

                // mostramos que se eligio 
                switch (data) {
                    case 1:
                        alert("Vamos por la piedra"); 
                        console.log("Vamos por la piedra"); 
                        break;
                    case 2:
                        alert("Vamos por el papel"); 
                        console.log("Vamos por el papel"); 
                        break;
                    case 3:
                        alert("Vamos por la tijera"); 
                        console.log("Vamos por la tijera");  
                        break;
                    default:
                        break;
                }

                // mostramos que eligio la pc
                switch (dataPc) {
                    case 1:
                        alert("La compu eligio piedra"); 
                        console.log("La compu eligio piedra"); 
                        break;
                    case 2:
                        alert("La compu eligio papel"); 
                        console.log("La compu eligio papel"); 
                        break;
                    case 3:
                        alert("La compu eligio tijera"); 
                        console.log("La compu eligio tijera"); 
                        break;
                    default:
                        break;
                }

                //  comparo valores para obtener quien gano la vuelta
                if (dataPc === data) {
                    alert("Empate");
                    console.log("Empate"); 
                    vuelta = vuelta - 1;

                    } else if (dataPc === 3 && data == 2) {
                        alert("Gano la pc con su tijera"); 
                        console.log("Gano la pc con su tijera"); 
                        sumarPuntoPc();

                        } else if (dataPc == 3 && data === 1) {
                            alert("Plak! ganaste con tu piedra"); 
                            console.log("Plak! ganaste con tu piedra"); 
                            sumarPuntoVos();
                    
                            } else if (dataPc == 2 && data === 3) {
                                alert("Ganaste con tu tijera"); 
                                console.log("Ganaste con tu tijera"); 
                                sumarPuntoVos();
                    
                            } else if (dataPc === 2 && data == 1) {
                                alert("Gano la pc con su papel"); 
                                console.log("Gano la pc con su papel"); 
                                sumarPuntoPc();
                    
                        } else if (dataPc === 1 && data == 3) {
                            alert("Plak! gano la pc con su piedra"); 
                            console.log("Plak! gano la pc con su piedra"); 
                            sumarPuntoPc();
                    
                    } else if (data === 2 && dataPc == 1 ) {
                        alert("Ganaste con tu papel"); 
                        console.log("Ganaste con tu papel"); 
                        sumarPuntoVos();
                    
                }


    alert("Resultado de esta vuelta: \n "+ dataDos +": " + resultadoVos + " \n Pc: " + resultadoPc);
     
 
    final();
}

