from django.urls import path
from . import views 


urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('services/', views.getServices, name='services'),

]