from django.db import models
import email 

class Personal(models.Model):
    nombre = models.CharField (verbose_name='Nombres_per', max_length=20, null=False)
    apellido = models.CharField (verbose_name='Apellidos_per', max_length=40, null=False)
    rut = models.CharField (verbose_name='Rut', max_length=9, null=False)
    dv = models.CharField (verbose_name='Digito_verificador', max_length=1, null=False)
    email = models.EmailField ()

