from django.db import models
from ckeditor.fields import RichTextField


class Course(models.Model):
    name = models.CharField("Kurs nomi", max_length=100)
    slug = models.SlugField()
    img = models.ImageField(upload_to="courses/")
    sub_title = models.CharField("Kurs nomi pasiga so'z ixtiyoriy", max_length=100, blank=True)
    about1 = RichTextField("Kurs haqida 1")
    about2 = RichTextField("Kurs haqida 2 ixtiyoriy", blank=True)
    to_students_title = models.CharField("O'quvchilar uchun matn sarlavhasi ixtiyoriy", max_length=100, blank=True)
    to_students_text = RichTextField("O'quvchilar uchun matn asosiy ixtiyoriy", blank=True)
    course_date = models.CharField("Kurs davom etish vaqti", max_length=200)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name


class CourseList(models.Model):
    name = RichTextField()
    bind = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="course")

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name[0:20]


class CourseUser(models.Model):
    full_name = models.CharField(max_length=100)
    age = models.IntegerField()
    number = models.IntegerField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    message = models.TextField(blank=True)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.full_name