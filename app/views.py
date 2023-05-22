from django.shortcuts import render
from django.http import HttpResponse
def  index(request):
    return render(request,'index.html')
def handlelogin(request):
    return render(request,'login.html')
def handlesignup(request):
    return render(request,'signup.html')

