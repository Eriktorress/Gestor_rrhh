from django.contrib import admin
from .models import Personal


# Register your models here.
class PersonalAdmin(admin.ModelAdmin):
    list_display = ('nommbre', 'apellido', 'email', 'rut', 'dv')
    search_fields = ('nommbre', 'apellido', 'email', 'rut', 'dv')
    
admin.site.register(Personal)
