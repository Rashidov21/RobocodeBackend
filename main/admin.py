from django.contrib import admin
from .models import Course, CourseList, CourseUser


@admin.register(Course)
class CourseAdminRegister(admin.ModelAdmin):
    list_display = ['name', 'id', 'date']
    prepopulated_fields = {'slug': ['name']}


admin.site.register(CourseList)
admin.site.register(CourseUser)
