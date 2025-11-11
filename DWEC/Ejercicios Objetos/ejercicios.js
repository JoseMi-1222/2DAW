// 1. Crea un objeto con 3 propiedades
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// 2. Accede y muestra su valor
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

// 3. Agrega una nueva propiedad
persona.profesion = "Desarrollador";
console.log(persona.profesion);

// 4. Elimina una de las 3 primeras propiedades
delete persona.ciudad;
console.log(persona.ciudad);

// 5. Agrega una función e invócala
persona.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};
persona.saludar();

// 6. Itera las propiedades del objeto
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 7. Crea un objeto anidado
persona.direccion = {
    calle: "Gran Vía",
    numero: 28,
    ciudad: "Madrid"
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona.direccion.calle);
console.log(persona.direccion.numero);
console.log(persona.direccion.ciudad);

// 9. Comprueba si los dos objetos creados son iguales
const otraPersona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    direccion: {
        calle: "Gran Vía",
        numero: 28,
        ciudad: "Madrid"
    }
};

console.log(JSON.stringify(persona) === JSON.stringify(otraPersona));

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona.nombre === otraPersona.nombre);
console.log(persona.edad === otraPersona.edad);
console.log(persona.profesion === otraPersona.profesion);
console.log(persona.direccion.calle === otraPersona.direccion.calle);
console.log(persona.direccion.numero === otraPersona.direccion.numero);
console.log(persona.direccion.ciudad === otraPersona.direccion.ciudad);