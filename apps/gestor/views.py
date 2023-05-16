from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from .models import Worker
import json
# Create your views here.


class WorkerView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id=0):
        if (id > 0):
            workers = list(Worker.objects.filter(id=id).values())
            if len(workers) > 0:
                worker = workers[0]
                datos = {'message': "Success", 'Worker': worker}
            else:
                datos = {'message': "Worker not found..."}
            return JsonResponse(datos)
        else:
            workers = list(Worker.objects.values())
            if len(workers) > 0:
                datos = {'message': "Success", 'workers': workers}
            else:
                datos = {'message': "workers not found..."}
            return JsonResponse(datos)

    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        Worker.objects.create(name=jd['name'], last_name=jd['last_name'], email=jd['email'])
        datos = {'message': "Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        workers = list(Worker.objects.filter(id=id).values())
        if len(workers) > 0:
            worker = Worker.objects.get(id=id)
            worker.name = jd['name']
            worker.last_name = jd['last_name']
            worker.email = jd['email']
            worker.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Worker not found..."}
        return JsonResponse(datos)

    def delete(self, request, id):
        workers = list(Worker.objects.filter(id=id).values())
        if len(workers) > 0:
            Worker.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Worker not found..."}
        return JsonResponse(datos)