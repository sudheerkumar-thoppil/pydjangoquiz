from django.shortcuts import render,HttpResponse
from.models import Questions
from django.core.paginator import Paginator
# Create your views here.
def index(request):
    questions =Questions.objects.all()
    length=len(questions)
    paginator =Paginator(questions,1)
    page_number =request.GET.get("page")
    page_obj = paginator.get_page(page_number) 
    return render(request,'index.html',{'questions':questions,'length':length,"page_obj": page_obj})
   

