from django.db import models

# Create your models here.
class Questions(models.Model):
    question =models.CharField(max_length=200)
    answer1=models.CharField(max_length=100)
    answer2=models.CharField(max_length=100)
    answer3=models.CharField(max_length=100)
    answer4=models.CharField(max_length=100)
    correct=models.CharField(max_length=100)

    def __str__(self):
        return self.question


