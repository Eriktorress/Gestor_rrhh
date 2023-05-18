from rest_framework import serializers
from .models import Personal_Banco

class Personal_BancoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Personal_Banco
        fields = '__all__'