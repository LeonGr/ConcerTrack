"""Get band names from BandsInTown"""
import string
import itertools
import grequests

def download():
    """Download artist names"""

    chars = string.ascii_lowercase

    all_letters = []

    for i in range(1, 4):
        for letters in itertools.product(chars, repeat=i):
            all_letters.append(''.join(letters))

    urls = []

    base_url = "https://news.bandsintown.com/searchArtists?search="

    for letters in all_letters:
        urls.append(base_url + letters)

    requests = (grequests.get(u) for u in urls)

    responses = grequests.map(requests)

    artists = []

    for response in responses:
        try:
            data = response.json()['data']
            for artist in data:
                if not artist['name'] in artists:
                    artists.append(artist['name'])
        except AttributeError:
            continue

    print(artists)
    print(len(artists))

download()
