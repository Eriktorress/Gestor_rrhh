from django.db import models
import email 

class Personal(models.Model):
    personalId = models.AutoField(primary_key=True)
    nombre = models.CharField (max_length=20, null=False)
    apellido = models.CharField (max_length=40, null=False)
    rut = models.CharField (max_length=9, null=False)
    dv = models.CharField (max_length=1, null=False)
    email = models.EmailField ()
    
    def __str__(self) :
        return f"{self.nombre} - {self.apellido} {self.email}"