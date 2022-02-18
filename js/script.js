// desafio complementario 1

console.log("Iniciando codigo");
alert("Ejercicio desafio complementario: calcular tu ganancia en una inversion de 6 meses con una ganacia mensual de 3% en el banco");

let data = parseFloat(prompt("ingresa el monto a invertir"));
let dataDos = prompt("ingresa tu nombre");
let porcentaje = data / 100 * 3; // saco el 3% 
// calculo el % total de las ganancias 
let resultado = porcentaje * 6; 

for (let index = 1; index < 7; index++) {
    const resultado = porcentaje * index;
    if (index > 6) {
        // Muesto lo que se lleva al final de los 6 meses en %
        alert("Tenemos tu ganancia total " + dataDos + " y es de $" + resultado + " en 6 meses"); 
        console.log("ganancia correcta"); 
    } 
    // Muesto lo que ganaria cada mes 
    alert(" el mes " + index + " ganas un total de $" + resultado );    
}
// calculo el total de las ganancias con sus porcentajes
let invertido = resultado + data; 

// defino si va a invertir
let fin = prompt("Deseas invertir $"+ data +": si / no");

 // verifico que opcion eligio
 if (fin == "si" || fin == "Si" || fin == "SI"){
         // ingreso el numero de cuenta
         let ok = prompt("ingrese un CBU"); 
          // simulo la extraccion 
         alert("Dinero extraido con exito! presione aceptar");   
     // fin del proceso 
    alert(" GENIAL! su dinero se bloqueo por 6 meses  y te entregaremos un total de $" + invertido + " en tu cuenta " + ok);
    console.log("todo ok");    

} else {
    // fin del proceso
    alert(" Lamentamos que no tenga mentalidad de ingresos pasivos... saludos!"); 
    console.log("todo ok");

}

