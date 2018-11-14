from django.shortcuts import render
from gamedata.models import *
import json

from .module.key_generator import KeyGenerator


def register_game_data(request):
    generator = KeyGenerator()
    income = json.dump(request.body)

    # TODO: 예외처리
    new_gamedata = Gamedata()
    new_gamedata.game_name = income['game_name']
    new_gamedata.score_type = income['score_type']
    new_gamedata.api_key = generator.key_gen()
    # TODO: Users 테이블과 연동
    # new_gamedata.admin_name = Users.objects.find(income['id'])

def sync(request):
    income = json.dumps(request.body)

    new_ladder_data = Ladder()
    new_ladder_data.game_index = Gamedata.objects.find(income['api_key'])
    new_ladder_data.score = income['score']
    new_ladder_data.player_id = income['player_id']

    new_ladder_data.save()

def test(request):
    all = Ladder.objects.all()

    return render(request, 'gamedata/test.html', {'all_data': all})

def request_ladder_data(request):
    income = json.dumps(request.body)

    ladder_info_list = Ladder.objects.filter(player_id=income[player_id])
    # TODO: 결과 Serialize