# Generated by Django 3.1.1 on 2020-09-21 12:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stocktrading', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='user_id',
        ),
    ]