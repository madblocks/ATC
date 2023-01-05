from .models import User, Manufacturer, Tool
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('id','email','first_name','last_name','username','password','bio','profile_img')
        extra_kwargs = {'write_only': True}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ToolSerializer(serializers.HyperlinkedModelSerializer):

    manufacturer = serializers.HyperlinkedRelatedField(
        view_name='manufacturer_detail',
        read_only=True
    )

    class Meta:
        model = Tool
        fields = ('id', 'name', 'category', 'description', 'img', 'manufacturer')

class ManufacturerSerializer(serializers.HyperlinkedModelSerializer):
    tool = ToolSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Manufacturer
        fields = ('id', 'company_name', 'description', 'logo')