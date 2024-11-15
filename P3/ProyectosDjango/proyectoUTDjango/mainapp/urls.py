
from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index,name='inicio'),
    path('inicio/',views.index,name='inicio'),
    path('acercade/',views.about,name='acercade'),
    path('mision/',views.about,name='mision'),
    path('vision/',views.about,name='vision'),

]