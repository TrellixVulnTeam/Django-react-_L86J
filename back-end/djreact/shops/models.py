from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=30)
    address = models.TextField()
    price =  models.IntegerField()


    def __str__(self):
        return self.name


class Shops(models.Model):
    name = models.CharField(max_length=30)
    address = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    total = models.IntegerField(default=0)


    def __str__(self):
        return self.name


