






class OrganisationUserRegistrationView(CreateAPIView):
    permission_classes = [AllowAny]
    model = OrganisationUser
    queryset = U.all()
    serializer_class = OrganisationUserRegistrationSerializer

    def post(self, request):  
        logger.info("requested to post details of Organization User Registration")                                                                                                                                                                                                
        request_data = request.data.copy()
        request_data['email'] = request_data['email'].lower()
        request_data['password'] = get_random_string(length=8)
        
        serializer = self.serializer_class(data=request_data)
        
         