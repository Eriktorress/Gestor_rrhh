
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from apps.gestor.views import WorkerView
from apps.personal.views import PersonalView
from django.conf import settings

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    
    path('workers/', WorkerView.as_view(), name='workers_list'),
    path('workers/<int:id>', WorkerView.as_view(), name='workers_process'),
    
    path('personals/', PersonalView.as_view()),
    path('personals/<int:pk>', PersonalView.as_view()),
    
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns+= [re_path(r'^,*', TemplateView.as_view(template_name='index.html'))]