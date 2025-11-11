//11. Crea un Map llamado usuariosOnline. Asocia la clave 'user1' al valor 'Ana' y la clave 'user2' al valor 'Pedro' usando set(). Obtén y muestra el nombre asociado a 'user1' usando get().
const usuariosOnline = new Map();
usuariosOnline.set('user1', 'Ana');
usuariosOnline.set('user2', 'Pedro');
console.log(usuariosOnline.get('user1'));

//12. Imprime el número de usuarios online con la propiedad size. Verifica si existe el usuario 'user3' usando has().
console.log(usuariosOnline.size);
console.log(usuariosOnline.has('user3'));

//13. Itera sobre usuariosOnline usando el método entries() e imprime cada par [clave, valor].
for (const [clave, valor] of usuariosOnline.entries()) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

//14. Crea un objeto admin = {id: 99}. Usa este objeto admin como clave en un nuevo Map llamado roles y asóciale el valor 'Administrador'. Muestra el valor que se obtiene al buscar con la clave admin.
const admin = {id: 99};
const roles = new Map();
roles.set(admin, 'Administrador');
console.log(roles.get(admin));

//15. Diseña una función obtenerConfiguracion(clave) que use un Map para cachear los resultados. Si la clave ya está en el Map, devuelve el valor cacheado (simula un acceso rápido). Si no está, simula una "consulta lenta" (p. ej., console.log('Consultando API...') y guarda el resultado en el Map antes de devolverlo.
const configuracionesCache = new Map();

function obtenerConfiguracion(clave) {
    if (configuracionesCache.has(clave)) {
        return configuracionesCache.get(clave);
    } else {
        console.log('Consultando API...');
        const resultado = `Resultado de la consulta para ${clave}`;
        configuracionesCache.set(clave, resultado);
        return resultado;
    }
}