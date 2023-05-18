import viewsets
from .serializers import EmpresaSerializer
from .models import Empresa  

 #---- Serializador ------
class Empresaview(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

#Listar Empresa
def list_empresa(request):
    listado = Empresa.objects.all();