from django import forms
from .models import CourseUser


class CourseUserForm(forms.ModelForm):
    class Meta:
        model = CourseUser
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['number'].widget.attrs['placeholder'] = '+998'
        self.fields['message'].widget.attrs['style'] = ''
        self.fields['message'].widget.attrs['rows'] = ''
        self.fields['message'].widget.attrs['cols'] = ''
