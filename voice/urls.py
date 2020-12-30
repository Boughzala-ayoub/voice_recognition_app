from django.urls import path
from .views import index, instructions


app_name = 'voice'


urlpatterns = [
    path('', index, name='index'),
    path('instructions/', instructions, name='instructions'),
]
