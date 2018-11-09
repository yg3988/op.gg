from django.db import models


class Gamedata(models.Model):
    index = models.AutoField(primary_key=True)
    game_name = models.CharField(max_length=50)
    score_type = models.CharField(max_length=10)
    api_key = models.CharField(max_length=50)
    admin_name = models.CharField(max_length=10)


class Ladder(models.Model):
    index = models.AutoField(primary_key=True)
    game_index = models.ForeignKey('Gamedata', on_delete=models.CASCADE)
    score = models.IntegerField()
    player_id = models.CharField(max_length=10)