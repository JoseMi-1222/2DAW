/*3. Manejo de Errores Personalizados y finally (2.5 Puntos)
En el archivo excepciones.js se define una clase de error personalizada. Utilizando ese concepto:
1.​ Defina una nueva clase de error llamada OperacionInvalidaError que herede de Error y acepte un
parámetro extra en su constructor: operacion (String).
2.​ Cree una función llamada dividir(a, b) que reciba dos números:
​Si b es igual a $0$, la función debe usar la palabra clave throw para lanzar una nueva
instancia de OperacionInvalidaError con el mensaje "División por cero no permitida" y la
operacion definida como "División".
​En caso contrario, debe devolver la división.
3.​ Invoque la función dividir(10, 0) dentro de un bloque try...catch...finally.
4.​ El bloque catch debe imprimir el mensaje de error y el tipo de operación.
5.​ El bloque finally debe imprimir: "Cálculo finalizado, recursos liberados." (El bloque finally se ejecuta
siempre, independientemente de si hay error).*/

//extiendo error y creo el parametro nuevo
class OperacionInvalidaError extends Error{
    constructor(mensaje, operacion){
        super(mensaje);
        this.name = "OperacionInviladaError"
        this.operacion = operacion;

    }
}

//funcion que divide y lanza eerror y devuelve el resultado
function dividir(a,b){
    if (b===0) {
        throw new OperacionInvalidaError("División por cero no permitida", "División");
    }
    return a / b;
}

//control de errores donde controlas que no puedas dividir entre cero
try{
    console.log(dividir(10,0));
}catch (error){
    console.error(`${error.name}: ${error.message}`)
}