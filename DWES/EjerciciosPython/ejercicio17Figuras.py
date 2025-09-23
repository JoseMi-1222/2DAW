from ejercicio17 import *

class triangulo(figuraGeometrica):
    
    def __init__(self, ancho = 0, alto = 0):
        super().__init__(ancho, alto, "Triangulo")
        
    def area(self):
        print("Area del triangulo")
        return (self.ancho * self.alto) / 2
    def __str__(self):
        return super().__str__() + ", area: " + str(self.area())
    
ancho = int(input("Introduce el ancho del triangulo: "))
alto = int(input("Introduce el alto del triangulo: "))

triangulo1 = triangulo(ancho,alto)
print(triangulo1)

class rectangulo(figuraGeometrica):
    
    def __init__(self, ancho = 0, alto = 0):
        super().__init__(ancho, alto, "Rectangulo")
        
    def area(self):
        print("Area del rectangulo")
        return self.ancho * self.alto
    
    def __str__(self):
        return super().__str__() + ", area: " + str(self.area())

ancho = int(input("Introduce el ancho del rectangulo: "))
alto = int(input("Introduce el alto del rectangulo: "))

rectangulo1 = rectangulo(ancho,alto)
print(rectangulo1)




