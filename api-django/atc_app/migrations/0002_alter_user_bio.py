# Generated by Django 4.1.4 on 2023-01-05 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('atc_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='bio',
            field=models.TextField(null=True),
        ),
    ]