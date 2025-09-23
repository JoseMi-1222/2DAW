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
        
if __name__ == '__main__':
    unittest.main()