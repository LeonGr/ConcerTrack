"""Get band names from BandsInTown"""
import string
import itertools
import requests

output_file = open("output.json", "a")
artists = []

def load(letters):
    """Make http request and print result"""
    print(letters)
    request = requests.get("https://news.bandsintown.com/searchArtists?search=" + letters)

    response_data = request.json()['data']
    print('test')
    for artist in response_data:
        if artist['name'] not in artists:
            artists.append(artist['name'])
            output_file.write('"' + artist['name'] + '"' + ",\n")

chars = string.ascii_lowercase

all_letters = []

for i in range(2, 3):
    for letters in itertools.product(chars, repeat=i):
        all_letters.append(''.join(letters))

for letters in all_letters:
    load(letters)

output_file.close()
