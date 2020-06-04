from django.db import models


class SchoolClass(models.Model):
    number = models.IntegerField()


class Subject(models.Model):
    title = models.CharField(max_length=100)
    school_class = models.ForeignKey(SchoolClass, on_delete=models.CASCADE, related_name='subjects')


class Lesson(models.Model):
    title = models.CharField(max_length=100)
    order = models.IntegerField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='lessons')


class LessonPicture(models.Model):
    picture = models.ImageField(upload_to='learning_fe/static/images/lesson/',
                                default='learning_fe/static/images/lesson/default-lesson.png')
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='pictures')
    order = models.IntegerField()
