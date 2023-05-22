# Generated by Django 3.2.16 on 2023-05-22 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Personal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=20, verbose_name='Nombres_per')),
                ('apellido', models.CharField(max_length=40, verbose_name='Apellidos_per')),
                ('rut', models.CharField(max_length=9, verbose_name='Rut')),
                ('dv', models.CharField(max_length=1, verbose_name='Digito_verificador')),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
    ]
