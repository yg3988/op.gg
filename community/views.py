from django.shortcuts import render
from django.views import View
from django.contrib.auth import login , logout, authenticate
from django.contrib.auth.models import User
from django.http import HttpResponse


def community(request):
    pass


def write(request):
    pass


def read(request):
    pass


class Login(View):
    def get(self, request):
        # er\for Test purpose
        return render(request, 'for_develop/login.html')

    def post(self, request):
        user = authenticate(request, username=request.POST['id'], password=request.POST['pw'])

        if user is None:
            return HttpResponse('Fail')
        else:
            login(request, user)
            return HttpResponse('Success')


class Logout(View):
    def get(self, request):
        if request.user.is_authenticated:
            logout(request)
