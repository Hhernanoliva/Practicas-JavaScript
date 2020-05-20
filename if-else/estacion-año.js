const dia = prompt("Que dia es hoy?");
const mes = prompt("En que mes estamos?");
const hemisferio = prompt("En que hemisferio te encuentras? (Norte o Sur)");

if ((dia >= 21 && mes === "Septiembre") || mes === "Octubre" || mes === "Noviembre" ||
    (dia <= 21 && mes === "Diciembre")) {
    if (hemisferio === "Sur") {
        alert("Estas en Primavera!!!");
    } else {
        alert("Estas en Otoño");
    }
};

if ((dia >= 21 && mes === "Diciembre") || mes === "Enero" || mes === "Febrero" ||
    (dia <= 21 && mes === "Marzo")) {
    if (hemisferio === "Sur") {
        alert("Estas en Verano!!!");
    } else {
        alert("Estas en Invierno");
    }
};

if ((dia >= 21 && mes === "Marzo") || mes === "Abril" || mes === "Mayo" ||
    (dia <= 21 && mes === "Junio")) {
    if (hemisferio === "Sur") {
        alert("Estas en Otoño!!!");
    } else {
        alert("Estas en Primavera");
    }
};

if ((dia >= 21 && mes === "Junio") || mes === "Julio" || mes === "Agosto" ||
    (dia <= 21 && mes === "Septiembre")) {
    if (hemisferio === "Sur") {
        alert("Estas en Invierno!!!");
    } else {
        alert("Estas en Verano");
    }
};







// 21 septiembre a 21 diciembre Primavera(sur) / Otoño(norte) 
// 21 diciembre a 21 marzo Verano(sur) / Invierno(norte)
// 21 marzo a 21 junio Otoño(sur) / Primavera(norte)  
// 21 junio a 21 septiembre Invierno(sur) / Verano(norte)