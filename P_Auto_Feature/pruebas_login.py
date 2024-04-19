import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


class LoginTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome() #URL de la pagina a probar
        self.driver.get("http://127.0.0.1:5500/HTML/Login.html")

    def tearDown(self):
        self.driver.quit()

    def test_inicio_sesion_exitoso(self):
        # Pasos de la prueba
        self.driver.find_element(By.ID, "floatingInput").send_keys(
            "usuario@example.com"
        )
        self.driver.find_element(By.ID, "floatingPassword").send_keys("contraseña")
        self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

        # Verificación
        # Verificar la presencia de un mensaje de bienvenida o redirección a la página principal
        mensaje_bienvenida = self.driver.find_element(
            By.CSS_SELECTOR, ".welcome-message"
        ).text
        self.assertEqual(mensaje_bienvenida, "Bienvenido, usuario@example.com")


if __name__ == "__main__":
    unittest.main()
