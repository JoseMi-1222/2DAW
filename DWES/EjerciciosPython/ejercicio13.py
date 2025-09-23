class estudiante():
    def __init__(self,nombre,edad,curso):
        self.nombre = nombre
        self.edad = edad
        self.curso = curso
    def mostrarNombre(self):
        print(self.nombre)
    def __str__(self):
        return "Nombre del estudiante: " + self.nombre + ", edad: " + str(self.edad) + ", curso: " + self.curso

estudiante1 = estudiante("Pepe",23,"2DAW")
estudiante2 = estudiante("Ana",22,"1DAW")

listaEstudiantes = [estudiante1,estudiante2]
for i in listaEstudiantes:
    print(i)
    i.mostrarNombre()   
    