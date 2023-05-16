from django.db import models

# Create your models here.



class Worker(models.Model):
    name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    email = models.EmailField()