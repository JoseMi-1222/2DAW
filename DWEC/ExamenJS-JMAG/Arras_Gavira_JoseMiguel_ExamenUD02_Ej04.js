/*4. Arrays y Mapas: Manipulación de Datos (2.5 Puntos)
Se requiere gestionar una lista de empleados. La siguiente información se ha guardado en un Map:
JavaScript
let empleados = new Map([
["A001", { nombre: "Aritz", salario: 3000 }],
["B002", { nombre: "Antonio", salario: 2500 }],
["C003", { nombre: "Juan", salario: 3200 }]
]);
Tarea:
1.​ Use el método forEach del Map para iterar sobre todos los empleados.
2.​ Dentro del forEach, si el salario del empleado es superior a $3000$, debe actualizar su salario con
un aumento del 10%.
3.​ Después del forEach, utilice el método entries() para obtener un nuevo array con las parejas
clave-valor actualizadas.
4.​ Imprima el array final de entradas ([clave, valor]).*/

//map copiado del eenuncuado
let empleados = new Map([
["A001", { nombre: "Aritz", salario: 3000 }],
["B002", { nombre: "Antonio", salario: 2500 }],
["C003", { nombre: "Juan", salario: 3200 }]
]);

//for each donde recorremos el map y el que tenga un salario mayor a 3000 se le aumenta
empleados.forEach((empleado) =>{
    if (empleado.salario > 3000) {
        empleado.salario *= 1.1
    }
});

//se actualiza el map y se muestra como tabla
const arrayActualizado = Array.from(empleados.entries());
console.table(arrayActualizado);