from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  
  profile_img = models.CharField(max_length=512, blank=True, null=True)
  bio = models.TextField(null=True)

  def __str__(self):
    return self.username

class Manufacturer(models.Model):
  company_name = models.CharField(max_length=100)
  description = models.TextField(max_length=100)
  logo = models.CharField(max_length=100)

  def __str__(self):
    return self.company_name

class Tool(models.Model):
  manufacturer = models.ForeignKey(
    Manufacturer, on_delete=models.CASCADE
  )
  category = models.CharField(max_length=100, null=True)
  name = models.CharField(max_length=100)
  description = models.TextField(max_length=100)
  img = models.CharField(max_length=254)

  def __str__(self):
    return self.name

class Collection(models.Model):
  user = models.ForeignKey(
    User, on_delete=models.CASCADE, related_name="collection"
  )
  name = models.CharField(max_length=100)
  tools = models.ManyToManyField(Tool, through='CollectionTools')

  def __str__(self):
    return self.name

class CollectionTools(models.Model):
  collection = models.ForeignKey(
    Collection, on_delete=models.CASCADE
  )
  tools = models.ForeignKey(
    Tool, on_delete=models.CASCADE
  )