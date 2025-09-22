class animal():
    def __init__(self, nombre = ""):
        self.nombre = nombre
    def mostrarNombre(self):
        print(self.nombre)
    def __str__(self):
        return self.nombre
        
animal1 = animal("perro")
animal2 = animal("gato")

#animal1.mostrarNombre()
#animal2.mostrarNombre()

print(animal1)
#print(animal2.nombre)
    