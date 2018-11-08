import json

def get_secret_value():
    with open('./opgg/keys/keys.json') as f:
        result = json.load(f)

    return result