from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Service
from .services import services
from .serializers import ServiceSerializer



# Create your views here.
# URLS- Funtion base views allow to logic within the view (Class are more optimal)

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/services/',
        '/api/services/create/',

        '/api/services/upload/',

        '/api/services/<id>/reviews/',

        '/api/services/top/',
        '/api/services/<id>/',

        '/api/services/delete/<id>/',
        '/api/services/update/<id>/',
    ]
    return Response(routes)

@api_view(['GET']) 
def getServices(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)



@api_view(['GET']) 
def getService(request,pk):
    service = Service.objects.get(_id=pk)
    serializer = ServiceSerializer(service, many=False)
    return Response(serializer.data)
