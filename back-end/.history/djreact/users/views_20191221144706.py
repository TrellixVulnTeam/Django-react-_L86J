from .models import User
from rest_framework.generics import CreateAPIView
from .serializers import UserRegistrationSerializer
from rest_framework import viewsets



class UserRegistrationView(CreatAPIView):
    model = User
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer

    def post(self, request):  
        print(request.data)                                                                                                                                                                                             
        serializer = UserRegistrationSerializer(data=request_data)
        serializer.save()
        