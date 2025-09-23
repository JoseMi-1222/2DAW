class animal():
    def __init__(self, nombre = ""):
        self.nombre = nombre
    def mostrarNombre(self):
        print(self.nombre)
    def __str__(self):
        return "Nombre del animal: " + self.nombre

class perro(animal):
    def __init__(self):
        super().__init__("perro")
        
class gato(animal):
    def __init__(self):
        super().__init__("gato")

animal1 = perro()
animal2 = gato()
animal3 = animal("cerdo")
        
#animal1.mostrarNombre()
#animal2.mostrarNombre()
#animal3.mostrarNombre()
    