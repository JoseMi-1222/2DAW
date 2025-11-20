/*1. Clases, Propiedades y Métodos (2.5 Puntos)
Diseñe una clase llamada Película con las siguientes especificaciones:
●​ Constructor: Acepta titulo, genero (String) y una propiedad privada llamada #precioBase
(Number), que se inicializa a $5.
●​ Propiedad Privada: #precioBase.
●​ Método Getter precio(): Devuelve el precio total de la película. Si el género es "Terror" o
"Estreno", el precio debe ser el #precioBase más un recargo de $2. En cualquier otro caso, debe
devolver solo el #precioBase.
●​ Método Setter genero: Permite cambiar el género, pero sólo si el nuevo género es una cadena de
texto no vacía. En caso contrario, debe lanzar un TypeError con el mensaje: "El género no puede
estar vacío".
Tarea: Implemente la clase, cree un objeto de prueba y pruebe el setter con un valor vacío dentro de un
bloque try...catch.Las pruebas son parte del examen*/

//defino el construcor y los metodos

class Pelicula{
    
    precioBase = 5
    constructor(titulo, genero) {
        this.titulo = titulo
        this.genero = genero
    }

    get precio(){
        if (this.genero==="Terror" || this.genero==="Estreno"){
            return this.precioBase +=2
        }
        return this.precioBase;
    }

    set genero (nuevoGenero){
        if (typeof nuevoGenero === "string" && nuevoGenero.trim()){
            this._genero = nuevoGenero
        }else {
            throw new TypeError ("El genero no puede estar vacio");
        }
    }

    get genero(){
        return this._genero
    }
}

//creo una nueva entrada del objeto pelicula sin meter genero para que falle queriendo
const pelicula1 = new Pelicula("It", "Terror")
console.log(`Pelicula: ${pelicula1.titulo}, Genero: ${pelicula1._genero}, Precio: ${pelicula1.precio}`);

//control de errores, si el genero esta vacio suelta el error
try{
    pelicula1.genero="";
}catch (error){
    console.error("Error capturado", error.message);
}

