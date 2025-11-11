// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


// 2. Añade un método a la clase que utilice las propiedades
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}


// 3. Muestra los valores de las propiedades e invoca a la función
const persona1 = new Persona("Ana", 25);
console.log(persona1.nombre);
console.log(persona1.edad);
persona1.saludar();


// 4. Añade un método estático a la primera clase
Persona.saludarEstatico = function(nombre, edad) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}


// 5. Haz uso del método estático
Persona.saludarEstatico("Luis", 40);    


// 6. Crea una clase que haga uso de herencia
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    presentar() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.puesto}.`);
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }   
    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
}


// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
}


// 9. Utiliza los get y set y muestra sus valores
const producto1 = new Producto("Laptop", 1500);
console.log(producto1.nombre);
console.log(producto1.precio);
producto1.precio = 1400;
console.log(producto1.precio);


// 10. Sobrescribe un método de una clase que utilice herencia
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }   
    presentar() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.puesto}.`);
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}, un empleado de ${this.puesto}.`);
    }   

}
const empleado1 = new Empleado("Carlos", 28, "Ingeniero");
empleado1.saludar();
empleado1.presentar();
