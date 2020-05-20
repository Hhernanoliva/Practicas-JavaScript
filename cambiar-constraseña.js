/* Hacer un programa que permita cambiar la contraseña de usuario. 
    Para eso tiene que responder las tres preguntas de seguridad. 
    Si las tres preguntas son respondidas correctamente,
tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada.
    En caso de que al menos alguna pregunta fue respondida
incorrectamente debe mostrar un mensaje advirtiéndolo.
    Definir de antemano (hardcodear) preguntas y respuestas. */

const preguntaUno = prompt("Que lenguaje de programacion estas usando?");
//const preguntaDos = prompt ("Vas a cambiar la contraseña?");
//const preguntaTres = prompt ("Estas seguro?");

if (preguntaUno === "JavaScript") {
    const preguntaDos = prompt("Vas a cambiar la contraseña?");
    if (preguntaDos === "Si") {
        const preguntaTres = prompt("Estas seguro?");
        if (preguntaTres === "Si") {
            const nuevaConstraseña = prompt("Puede escribir la nueva contraseña:");
            alert("La contraseña fue cambiada");

        } else {
            alert("Vuelva a intentarlo");
        }
    } else {
        alert("Vuelva a intentarlo");
    }
} else {
    alert("Vuelva a intentarlo");
}
