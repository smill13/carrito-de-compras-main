import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


class RegistroTests(unittest.TestCase):
    def setUp(self):
        self.driver = (
            webdriver.Chrome()
        )  # URL de la pagina a probar
        self.driver.get(
            "http://127.0.0.1:5500/HTML/Registro.html"
        )  

    def tearDown(self):
        self.driver.quit()

    def test_registro_exitoso(self):
        # Pasos de la prueba
        self.driver.find_element(By.ID, "floatingName").send_keys("usuario_prueba")
        self.driver.find_element(By.ID, "floatingInput").send_keys("prueba@example.com")
        self.driver.find_element(By.ID, "floatingPassword").send_keys(
            "contraseña_prueba"
        )
        self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

        # Verificando la presencia de un mensaje de confirmación o redirección a otra página

    def test_validacion_campos_requeridos(self):
        # Pasos de la prueba
        self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

        # Verificación
        mensaje_error_nombre = self.driver.find_element(
            By.CSS_SELECTOR, "#floatingName + .invalid-feedback"
        ).text
        mensaje_error_email = self.driver.find_element(
            By.CSS_SELECTOR, "#floatingInput + .invalid-feedback"
        ).text
        mensaje_error_password = self.driver.find_element(
            By.CSS_SELECTOR, "#floatingPassword + .invalid-feedback"
        ).text

        self.assertEqual(mensaje_error_nombre, "El nombre de usuario es requerido")
        self.assertEqual(mensaje_error_email, "El email es requerido")
        self.assertEqual(mensaje_error_password, "La contraseña es requerida")


if __name__ == "__main__":
    unittest.main()