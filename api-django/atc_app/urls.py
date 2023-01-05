from django.urls import path
from . import views, serializers
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView, TokenVerifyView)


urlpatterns = [
    # path('venues/', views.VenueList.as_view(), name='venue_list'),
    # path('venues/<int:pk>', views.VenueDetail.as_view(), name='venue-detail'),
    # path('events/', views.EventList.as_view(), name="event_list"),
    # path('events/<int:pk>', views.EventDetail.as_view(), name="event-detail"),

    # SimpleJWT URLS
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('blacklist/', views.UserLogout.as_view(), name='token-blacklist'),

    # User URLS
    # path('users/', views.UserList.as_view(), name='user_list'),
    path('users/create/', views.UserCreate.as_view(), name='user_create'),
    # path('users/logout', views.UserLogout.as_view(), name='user_logout'),
    # path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    # path('users/<str:username>', views.UserDetailByUsername.as_view(), name='user_detail_by_username'),

    
    # path('events/delete/:id', views.DeleteEvent.as_view(), name="delete-event")
]