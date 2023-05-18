from django.db import models
import email 

class Empresa(models.Model):
    empresa = models.CharField (verbose_name='Nombre_Empresa', max_length=20, null=False)
    razon_soc = models.CharField (verbose_name='Razon_Social', max_length=40, null=False)
    rut = models.CharField (verbose_name='Rut', max_length=9, null=False)
    dv = models.CharField (verbose_name='Digito_verificador', max_length=1, null=False)
    email = models.EmailField ()

    def __str__(self) :
        return f"{self.rut} - {self.Nombre_Empresa} {self.Razon_Social}"