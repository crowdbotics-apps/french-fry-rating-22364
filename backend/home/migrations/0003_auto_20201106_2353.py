# Generated by Django 2.2.17 on 2020-11-06 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='customtext',
            name='crunchiness',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='customtext',
            name='hot',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
        migrations.AddField(
            model_name='customtext',
            name='quantity',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
        migrations.AddField(
            model_name='customtext',
            name='saltiness',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
        migrations.AddField(
            model_name='customtext',
            name='soggy',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
