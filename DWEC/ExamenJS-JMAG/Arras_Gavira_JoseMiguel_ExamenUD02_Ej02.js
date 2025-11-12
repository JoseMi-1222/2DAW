/*2. Sets y Control de Flujo con for...of (2.5 Puntos)
Dado el siguiente conjunto de datos, que representa una lista de tareas pendientes:
JavaScript
const tareasConDuplicados = ["Comprar pan", "Programar", "Estudiar JS", "Comprar pan",
"Estudiar JS", "Comer"];
Tarea:
1.​ Cree un nuevo Set llamado tareasUnicas a partir del array dado, eliminando automáticamente los
duplicados.
2.​ Utilice un bucle for...of para iterar sobre tareasUnicas.
3.​ Dentro del bucle, implemente la lógica para saltarse (no imprimir) la tarea que contenga la palabra
"pan" y para detener la ejecución del bucle tan pronto como se encuentre la tarea "Comer".
4.​ Imprima las tareas restantes en la consola.*/

const tareasConDuplicados = ["Comprar pan", "Programar", "Estudiar JS", "Comprar Pan", "Estudia Js", "Comer" ]

//esto elimina los duplicados 
const tareasUnicas = new Set (tareasConDuplicados);

for (const tarea of tareasUnicas) {
    if (tarea.includes("pan")) continue;
    if (tarea === "Comer") {
        console.log("Se encontro comer, bucle parado");
        break;
    }
    console.log(tarea);
}

//no consigo que funcione el toLowerCase, lo pongo con . despues del include y me da error