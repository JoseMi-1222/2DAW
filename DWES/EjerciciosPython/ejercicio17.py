class figuraGeometrica():
    def __init__(self, ancho = 0, alto = 0, nombre = ""):
        self.ancho = ancho
        self.alto = alto
        self.nombre = nombre
    def __str__(self):
        return "Nombre: " + self.nombre + ", ancho: " + str(self.ancho) + ", alto: " + str(self.alto)