from django.contrib import admin
from django.urls import path,include




urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),
    
]



# from django.urls import path
# from .views import TaskListCreateView, TaskRetrieveUpdateDestroyView,MyTokenObtainPairView
# from rest_framework_simplejwt.views import (
#     TokenRefreshView,
# )

# urlpatterns = [
#     path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
#     path('tasks/<int:pk>/', TaskRetrieveUpdateDestroyView.as_view(), name='task-detail'),
#     path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

# ]