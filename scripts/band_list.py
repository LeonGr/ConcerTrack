"""Get band names from BandsInTown"""
import requests

def load(letters):
    """Make http request and print result"""
    request = requests.get("https://news.bandsintown.com/searchArtists?search=" + letters)

    response_data = request.json()['data']
    for artist in response_data:
        print(artist['name'])

all_letters = ['aa', 'ab', 'ac', 'ad', 'ae', 'af']

for letters in all_letters:
    load(letters)
