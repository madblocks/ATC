# Generated by Django 4.1.4 on 2023-01-05 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('atc_app', '0003_collection_manufacturer_tool_collectiontools_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manufacturer',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='manufacturer',
            name='logo',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='tool',
            name='description',
            field=models.TextField(),
        ),
    ]
