import viewsets
from .serializers import Personal_BancoSerializer
from .models import Personal_Banco  

 #---- Serializador ------
class Personal_Bancoview(viewsets.ModelViewSet):
    queryset = Personal_Banco.objects.all()
    serializer_class = Personal_BancoSerializer

#Listar Banco
def list_banco(request):
    listado = Personal_Banco.objects.all();