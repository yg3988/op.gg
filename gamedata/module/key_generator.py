from random import randint

class KeyGenerator:
    def __init__(self):
        self.key_set = 'abcdefghijklmnopqrstuvwxyz1234567890'
        self.key_len = len(self.key_set) - 1

    def key_gen(self, length=20):
        result = ''

        for _ in range(length):
            result = result + (self.key_set[randint(0, self.key_len)])

        return result

if __name__ == '__main__':
    obj = KeyGenerator()

    for i in range(5):
        print('{}회 \t key: {}'.format(i, obj.key_gen()))
