from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .serializers import PersonalSerializer

from .permissions import IsPostAuthorOrReadOnly, AuthorPermission
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from rest_framework.views import APIView
from django.views import View
from .models import Personal
import json

class PersonalView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get_personal(self, pk):
        try:
            personal = Personal.objects.get(personalId=pk)
            return personal
        except:
            return JsonResponse("Personal no existe", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_personal(pk)
            serializer = PersonalSerializer(data)
        else:
            data = Personal.objects.all()
            serializer = PersonalSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = PersonalSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Se ha creado el personal satisfactoriamente", safe=False)
        return JsonResponse("Ha fallado la creación de personal", safe=False)

    def put(self, request, pk=None):
        personal_to_update = Personal.objects.get(personalId=pk)
        serializer = PersonalSerializer(instance=personal_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Se ha modificado el personal satisfactoriamente", safe=False)
        return JsonResponse("Ha fallado la modificación de personal", safe=False)

    def delete(self, request, pk=None):
        personal_to_delete = Personal.objects.get(personalId=pk)
        personal_to_delete.delete()
        return JsonResponse("Personal eliminado exitosamente", safe=False)
