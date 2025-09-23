import unittest

from calculadora import Calculadora

class TestCalculadora(unittest.TestCase):
    
    def test_suma(self):
        print("Test suma")
        calculadora = Calculadora(8,2)
        self.assertEqual(calculadora.sumar(), 10, "La suma es correcta")
        
    def test_suma_erronea(self):
        print("Test suma erronea")
        calculadora = Calculadora(8,2)
        self.assertNotEqual(calculadora.sumar(), 11, "La suma es erronea")
        
    def test_resta(self):
        print("Test resta")
        calculadora = Calculadora(8,2)
        self.assertEqual(calculadora.restar(), 6, "La resta es correcta")
        
    def test_resta_erronea(self):
        print("Test resta")
        calculadora = Calculadora(8,2)
        self.assertNotEqual(calculadora.restar(), 5, "La resta es correcta")
        
    def test_multiplicacion(self):
        print("Test multiplicacion")
        calculadora = Calculadora(8,2)
        self.assertEqual(calculadora.multiplicar(), 16, "La multiplicacion es correcta")
        
    def test_multiplicacion_erronea(self):
        print("Test multiplicacion erronea")
        calculadora = Calculadora(8,2)
        self.assertNotEqual(calculadora.multiplicar(), 15, "La multiplicacion es erronea")
    
    def test_division(self):
        print("Test division")
        calculadora = Calculadora(8,2)
        self.assertEqual(calculadora.dividir(), 4, "La division es correcta")
    
    def test_division_erronea(self):
        print("Test division erronea")
        calculadora = Calculadora(8,2)
        self.assertNotEqual(calculadora.dividir(), 5, "La division es erronea")
                
if __name__ == '__main__':
    unittest.main()