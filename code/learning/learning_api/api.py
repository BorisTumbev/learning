from .models import SchoolClass, Lesson
from .serializers import UserSerializer, SchoolClassSerializer, LessonSerializer
from rest_auth.views import LoginView, APIView
from rest_framework import generics, permissions
from django.contrib.auth.models import User


class ULoginView(LoginView):

    def get_response(self):
        orginal_response = super().get_response()
        user_data ={'user': UserSerializer(self.user).data}
        orginal_response.data.update(user_data)

        return orginal_response


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class SchoolClassList(generics.ListAPIView):
    serializer_class = SchoolClassSerializer
    queryset = SchoolClass.objects.all()


class LessonList(generics.ListAPIView):
    serializer_class = LessonSerializer

    def get_queryset(self):
        return Lesson.objects.filter(subject=self.kwargs['subject_id'])
