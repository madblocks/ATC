from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  
  profile_img = models.CharField(max_length=512, blank=True, null=True)
  bio = models.TextField(null=True)
  # (Many to Many example?) locations = models.ManyToManyField(locations, through='maps')

  def __str__(self):
    return self.username

class Manufacturer(models.Model):
  company_name = models.CharField(max_length=100)
  description = models.TextField(max_length=100)

  def __str__(self):
    return self.company_name

class Category(models.Model):
  category = models.CharField(max_length=50)

  def __str__(self):
    return self.category

class Tool(models.Model):
  category = models.ForeignKey(
    Category, related_name="category"
  )
  manufacturer = models.ForeignKey(
    Manufacturer, related_name="manufacturer"
  )
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

  def __str__(self):
    return self.name

class CollectionTools(models.Model):
  collection = models.ForeignKey(
    Collection, on_delete=models.CASCADE
  )
  tools = models.ForeignKey(
    Tool, on_delete=models.CASCADE
  )