"""FgBlog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from FgBlog import views
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('',views.realHome),
    path('admin/', admin.site.urls),
    path('HtTest/', views.HtTest),
    path('getUser/user0', views.getUser),
    path('getUser/user1', views.getUser),
    path('getUser/user2', views.getUser),
    path('getUser/user3', views.getUser),
    path('getUser/user4', views.getUser),
    path('getUser/user5', views.getUser),
    path('getUser/user6', views.getUser),
    path('getUser/user7', views.getUser),
    path('getUser/user8', views.getUser),
    path('getUser/user9', views.getUser),
    path('getUser/user10', views.getUser),
    path('getUser/user11', views.getUser),
]
