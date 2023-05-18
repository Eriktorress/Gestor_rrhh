from django.db import models
import email 

class Personal_Banco(models.Model):
    banco = models.CharField (verbose_name='Nombre_Banco', max_length=20, null=False)
    tipo_cuenta = models.CharField (verbose_name='Tipo_Cuenta', max_length=40, null=False)
    numero_cuenta = models.CharField (verbose_name='Numero_Cuenta', max_length=20, null=False)

    def __str__(self) :
        return f"{self.rut} - {self.Nombre_Banco} {self.Tipo_Cuenta} {self.Numero_Cuenta}"