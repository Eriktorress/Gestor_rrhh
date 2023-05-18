from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from .models import Personal
import json
# Create your views here.


class PersonalView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id=0):
        if (id > 0):
            workers = list(Personal.objects.filter(id=id).values())
            if len(personals) > 0:
                personal = workers[0]
                datos = {'message': "Success", 'Worker': personal}
            else:
                datos = {'message': "Worker not found..."}
            return JsonResponse(datos)
        else:
            workers = list(Personal.objects.values())
            if len(personals) > 0:
                datos = {'message': "Success", 'personals': personals}
            else:
                datos = {'message': "personals not found..."}
            return JsonResponse(datos)

    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        Personal.objects.create(name=jd['name'], last_name=jd['last_name'], email=jd['email'])
        datos = {'message': "Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        workers = list(Personal.objects.filter(id=id).values())
        if len(personals) > 0:
            personal = Personal.objects.get(id=id)
            personal.name = jd['name']
            personal.last_name = jd['last_name']
            personal.email = jd['email']
            personal.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Personal not found..."}
        return JsonResponse(datos)

    def delete(self, request, id):
        personals = list(Personal.objects.filter(id=id).values())
        if len(personals) > 0:
            Personal.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Personal not found..."}
        return JsonResponse(datos)