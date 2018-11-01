import json

def get_secret_value():
    with open('keys.json') as f:
        return json.load(f)