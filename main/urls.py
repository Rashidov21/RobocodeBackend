from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.home, name="home"),
    path('gallery/', views.gallery, name="gallery"),
    path('course/<slug:slug>/', views.detail, name="detail"),
    path('register/', views.api_register, name="register")
]
