from django.shortcuts import render
from django.http import JsonResponse
from .models import Course
from .forms import CourseUserForm
from django.views.decorators.csrf import csrf_exempt

def home(request):
    return render(request, 'home.html')


def gallery(request):
    return render(request, 'gallery.html')


def detail(request, slug):
    context = {
        "course": Course.objects.get(slug=slug),
    }
    return render(request, 'detail.html', context)


@csrf_exempt
def api_register(request):
    data = {}
    if request.method == 'POST':
        form = CourseUserForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                data['status'] = 200
            except Exception as e:
                data['error'] = e
        else:
            data['status'] = 500
    return JsonResponse(data)

