from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Service 
        fields = '__all__'