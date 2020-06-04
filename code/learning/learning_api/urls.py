from django.urls import path
from rest_auth.views import LogoutView
from .api import ULoginView, UserCreate, UserView, SchoolClassList, LessonList

urlpatterns = [
    path('api/login', ULoginView.as_view()),
    path('api/logout', LogoutView.as_view()),
    path('api/register', UserCreate.as_view()),
    path('api/user', UserView.as_view()),

    path('api/school_classes', SchoolClassList.as_view()),
    path('api/lessons/<subject_id>', LessonList.as_view()),
]
