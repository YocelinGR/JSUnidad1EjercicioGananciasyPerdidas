//Ingresar datos
var ingresos=parseInt(prompt("Ingrese sus ganancias: "));
var costos=parseInt(prompt("Ingrese sus perdidas: "));
var porcentajeImpuesto=parseInt(prompt("Ingrese el porcentaje de impuestos (%): "));
var gananciaBruta=ingresos-costos;//Ganancia ganaciaBruta
var impuesto=gananciaBruta*porcentajeImpuesto/100;
var ganaciaNeta=gananciaBruta-impuesto;//Ganancia neta
//Mostrar resultados
document.write("Tu ganacia neta es: $ "+ganaciaNeta);
