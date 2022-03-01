function arrayok() {
    
console.log("Iniciando ");

alert("Ejercicio desafio: \n Juego de Piedra, papel y tijera: Incorporar Arrays");

      // variables del juego
      const resultadoVos = [0];
      const resultadoPc = [0];
      let valorPc = 0;
      let valorVos = 0;
      let vuelta = 0;
      let dataDos = 0;
      let dataPc = 0;
      let data = 0;

    // calculamos un número aleatorio  para la pc
    function numeroski(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // sumamos puntos
    function sumarPuntoPc() {
        resultadoPc.push(+1);
        valorPc = resultadoPc.reduce(
            (antes, actual) => antes + actual,
            0);
            console.log("La PC gano un punto"); 
            return valorPc;
    }
   

    // sumamos puntos
    function sumarPuntoVos() {
        resultadoVos.push(+1);
        valorVos = resultadoVos.reduce(
        (antes, actual) => antes + actual,
        0);
        console.log("La PC gano un punto"); 
        return valorVos;
    }

    // verificar botones
    function emergentes(resultado){
        if (resultado == null ||  resultado == "") {
             return seguirJugando();
        } else {
            return resultado;
            
        }
        
    }

    // preguntamos si seguir jugando
    function seguirJugando() {
        let ok = prompt("Quieres seguir jugando ? \n Si o No").toLowerCase();
        if (ok == "si") {
            vuelta = 0;
            resultadoVos = [];
            resultadoPc = [];
            console.log("Seleccionaste seguir jugando"); 
        } else {
            alert("Fue un placer jugar con vos perreke");
            vuelta = 3;
            console.log("Fin del juego"); 
        } 
    }

    // buscamos al ganador
    function final() {

        if (valorPc == 2) {
            alert("Lo siento "+ dataDos +" te gane: \n Atte: la pc");
            console.log("Gano la pc"); 
            seguirJugando();
        } else if(valorVos == 2){
            alert("oh Rayos, parece que me ganaste "+ dataDos);
            console.log("Enhorabuena! ganaste perreke"); 
            seguirJugando();
        } 

        return final;
    }
    

    dataDos = prompt("ingresa tu nombre");
    emergentes(dataDos);
    
    if (vuelta ==  0) {
    alert("Hola!!! soy muy bueno en este juego (La Pc), "+ dataDos +" vamos a la batalla ");
    console.log("Bienvenido "+ dataDos); 
    }

    // bucle para poder seguir jugando
    while (vuelta < 3) {
         
        // sumamos las partidas jugadas
        vuelta = vuelta + 1;

        // calculo el numero de la pc entre 1 y 3
        dataPc = numeroski(1,3); 
        
        // seleccionamos la jugada
        data = prompt("Ingresa tu jugada en números: \n 1 = Piedra \n 2 = Papel \n 3 = Tijera");
        emergentes(data);
        data = parseFloat(data);

        if (data != null || data != "") {
            
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


         alert("Resultado de esta vuelta: \n "+ dataDos +": " + valorVos + " \n Pc: " + valorPc);
     
        final();
        }
    }

} 