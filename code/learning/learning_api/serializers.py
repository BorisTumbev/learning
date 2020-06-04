from rest_framework import serializers
from django.contrib.auth.models import User
from .models import SchoolClass, Subject, Lesson, LessonPicture


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'is_superuser', 'username')

    def create(self, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')

        user_obj = User(username=username)
        user_obj.set_password(password)
        user_obj.save()

        return user_obj


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ('id', 'title')


class SchoolClassSerializer(serializers.ModelSerializer):
    subjects = SubjectSerializer(many=True)

    class Meta:
        model = SchoolClass
        fields = ('id', 'number', 'subjects')


class LessonPicSerializer(serializers.ModelSerializer):
    picture_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = LessonPicture
        fields = ('id', 'picture', 'picture_url')

    def get_picture_url(self, obj):
        return obj.picture.url.replace('learning_fe/', '')


class LessonSerializer(serializers.ModelSerializer):
    pictures = LessonPicSerializer(many=True)

    class Meta:
        model = Lesson
        fields = ('id', 'title', 'pictures')

