from django.shortcuts import render
from django.http import JsonResponse
from .models import Course
from .forms import CourseUserForm


def home(request):
    context = {
        "courses": Course.objects.all(),
        "form": CourseUserForm
    }
    return render(request, 'home.html', context)


def gallery(request):
    return render(request, 'gallery.html')


def detail(request, course_id):
    context = {
        "course": Course.objects.get(id=course_id),
        "form": CourseUserForm
    }
    return render(request, 'detail.html', context)


def api_register(request):
    data = {}
    if request.method == 'POST':
        form = CourseUserForm(request.POST)
        if form.is_valid():
            try:
                # form.save()
                data['status'] = 200
            except Exception as e:
                data['error'] = e
        else:
            data['status'] = 500
    return JsonResponse(data)
