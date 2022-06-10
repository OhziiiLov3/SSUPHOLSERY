from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .services import services
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
def getServices(request):
    return JsonResponse(services, safe=False)