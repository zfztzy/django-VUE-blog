from django.http import HttpResponse
from django.shortcuts import render


def HtTest(request):
    return render(request, 'test.html')

def getUser(request):
    return HttpResponse("test1111")

def realHome(request):
    return HttpResponse("这里开始写博客")



#Anaconda    
# export PATH=$PATH:/home/fg/anaconda3/bin


# uwsgi –http :8000 chdir /home/fg/fgBlog/fgBlog –module django_wsgi