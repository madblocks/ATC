from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView, TokenVerifyView)


urlpatterns = [

    # SimpleJWT URLS
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('blacklist/', views.UserLogout.as_view(), name='token-blacklist'),

    # User URLS
    path('users/create/', views.UserCreate.as_view(), name='user_create'),
    # path('users/logout', views.UserLogout.as_view(), name='user_logout'),
    # path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    # path('users/<str:username>', views.UserDetailByUsername.as_view(), name='user_detail_by_username'),

    # Manufacturer URLS
    path('manufacturers/', views.ManufacturerList.as_view(), name='manufacturer_list'),
    path('manufacturers/<int:pk>', views.ManufacturerDetail.as_view(), name='manufacturer_detail'),

    # Tools URLS
    path('tools/', views.ToolList.as_view(), name='tool_list'),
    path('tools/<int:pk>', views.ToolDetail.as_view(), name='tool_detail'),
]