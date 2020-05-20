
/* Crear un programa que pida al usuario ingresar un numero
 y mostrar en un mensaje si el valor ingresado es par o impar. */


let pedir = prompt("Ingresa un numero");
if (pedir % 2 == 0) {
    alert("Es un numero par")
} else {
    alert("Es un numero impar")
};


/* Crear un programa que pregunte al usuario cuántos
kilos de helado va a comprar y mostrar en un mensaje
la cantidad de sabores disponibles según la opción elegida.
Opciones:
1/4kg: 2 sabores.
1/2kg: 3 sabores.
3/4kg: 4 sabores.
1kg: 5 sabores. */


let heladeria = prompt("Cuantos kilos va llevar? 1/4kg; 1/2kg; 3/4kg; 1kg.");
if (heladeria == "1/4kg") {
    alert("Puede llevar 2 sabores")
};
if (heladeria == "1/2kg") {
    alert("Puede llevar 3 sabores")
};
if (heladeria == "3/4kg") {
    alert("Puede llevar 4 sabores")
};
if (heladeria == "1kg") {
    alert("Puede llevar 5 sabores")
};

/* Crear un programa que pida por un mes y devuelva
la cantidad de días que ese mes tiene. */

let mes = prompt("Escriba un mes, para saber cuantos dias tiene.");

if (mes == "enero") {
    alert("31 Dias")
};
if (mes == "febrero") {
    alert("30 Dias")
};
if (mes == "marzo") {
    alert("29 Dias")
};
if (mes == "abril") {
    alert("40 Dias")
};
if (mes == "mayo") {
    alert("2 Dias")
};
if (mes == "junio") {
    alert("15 Dias")
};
if (mes == "julio") {
    alert("445 Dias")
};
if (mes == "agosto") {
    alert("10 Dias")
};
if (mes == "septiembre") {
    alert("12 Dias")
};
if (mes == "octubre") {
    alert("999 Dias")
};
if (mes == "noviembre") {
    alert("no tiene Dias")
};
if (mes == "diciembre") {
    alert("no se cuentan los dias")
};
