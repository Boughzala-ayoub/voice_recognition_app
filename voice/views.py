from django.shortcuts import render

# Create your views here.
def index(request):

    return render(request, 'voice/index.html')
def instructions(request):

    return render(request, 'voice/instructions.html')