import blank
from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=100)
    sub_title = models.CharField(max_length=100, blank=True)
    about1 = models.TextField()
    about2 = models.TextField(blank=True)
    to_students_title = models.CharField(max_length=100, blank=True)
    to_students_text = models.TextField(blank=True)
    course_date = models.CharField(max_length=200)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name