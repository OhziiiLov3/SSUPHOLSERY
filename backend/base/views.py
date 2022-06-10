from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
# URLS- Funtion base views allow to logic within the view (Class are more optimal)
def getRoutes(request):
    return JsonResponse('Hello', safe=False)