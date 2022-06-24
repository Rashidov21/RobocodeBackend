from .models import Course

def course(request):
    context = {
        "courses": Course.objects.all()
    }
    return context