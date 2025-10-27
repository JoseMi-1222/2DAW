// 1. Captura una excepción utilizando try-catch sencillo
try {
  let resultado = 10 / 0; 
  console.log("Resultado:", resultado);
  console.log(variableInexistente); 
} catch (error) {
  console.log("Ocurrió un error:", error.message);
}

// 2. Captura una excepción utilizando try-catch-finally
try {
  let arreglo = [1, 2, 3];
  console.log(arreglo[5].toString()); 
} catch (error) {
  console.log("Error capturado:", error.message);
} finally {
  console.log("Bloque finally ejecutado.");
}

// 3. Lanza una excepción genérica
function verificarEdad(edad) {
  if (edad < 18) {
    throw new Error("La edad debe ser mayor o igual a 18");
  }
  return true;
}

try {
  verificarEdad(16);
} catch (error) {
  console.log("Excepción lanzada:", error.message);
}

// 4. Crea una excepción personalizada
class MiExcepcion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "MiExcepcion";
  }
}

function validarNumero(num) {
  if (num < 0) {
    throw new MiExcepcion("El número no puede ser negativo");
  }
  return true;
}

try {
  validarNumero(-5);
} catch (error) {
  if (error instanceof MiExcepcion) {
    console.log("Excepción personalizada capturada:", error.message);
  } else {
    console.log("Otra excepción capturada:", error.message);
  }
}

// 5. Lanza una excepción personalizada
function verificarString(str) {
  if (str.length < 5) {
    throw new MiExcepcion("La cadena debe tener al menos 5 caracteres");
  }
  return true;
}

try {
  verificarString("abc");
} catch (error) {
  if (error instanceof MiExcepcion) {
    console.log("Excepción personalizada capturada:", error.message);
  } else {
    console.log("Otra excepción capturada:", error.message);
  }
}   

// 6. Lanza varias excepciones según una lógica definida
function procesarValor(valor) {
  if (typeof valor !== "number") {
    throw new TypeError("El valor debe ser un número");
  }     
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    procesarValor("texto");
    procesarValor(-5);
} catch (error) {
    if (error instanceof MiExcepcion) {
        console.log("Excepción personalizada capturada:", error.message);
    } else {
        console.log("Otra excepción capturada:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["10.5", "abc", "20.3", "NaN", "30.1"];
for (let valor of valores) {
    try {
        let numero = parseFloat(valor);
        if (isNaN(numero)) {
            throw new Error(`El valor "${valor}" no es un número válido`);
        }
        console.log(`Valor convertido: ${numero}`);
    } catch (error) {
        console.log("Error al convertir valor:", error.message);
    }
}   

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
        throw new MiExcepcion(`La propiedad "${propiedad}" no existe en el objeto`);
    }
    return true;
}

try {
    const persona = { nombre: "Ana", edad: 25 };
    verificarPropiedad(persona, "direccion");
} catch (error) {
    if (error instanceof MiExcepcion) {
        console.log("Excepción personalizada capturada:", error.message);
    } else {
        console.log("Otra excepción capturada:", error.message);
    }
}   

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function funcionConError() {
    if (Math.random() < 0.7) {
        throw new Error("Error aleatorio ocurrido");
    }
    return "Éxito";
}

function ejecutarConReintentos(maxReintentos) {
    let intentos = 0;
    while (intentos < maxReintentos) {
        try {
            let resultado = funcionConError();
            console.log(resultado);
            return;
        } catch (error) {
            intentos++;
            console.log(`Intento ${intentos} fallido: ${error.message}`);
        }
    }
    console.log("Se alcanzó el máximo de reintentos sin éxito.");
}

ejecutarConReintentos(10);



