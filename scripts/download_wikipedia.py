import requests
from pyquery import PyQuery
import wikipedia
import re

request = requests.get("https://en.wikipedia.org/wiki/Lists_of_musicians")


pq = PyQuery(request.text)

links = []

for element in pq('li a'):
    link = element.attrib['href']
    if "List_" in link:
        links.append(link)

lists = []

for link in links:
    name = link.split("/")[-1]
    if name not in lists:
        lists.append(name)

names = []

num = 0

output_file = open("wikipedia_output.json", "a")

for wiki_list in lists[100:-1]:
    try:
        links = wikipedia.page(wiki_list).links

        for link in links:
            name = re.sub(r" ?\([^)]+\)", "", link)
            if name not in names:
                names.append(name)
                output_file.write('"' + name + '"' + ",\n")

        num += 1
        print("Downloaded list: " + num)
    except:
        continue

print(len(names))
output_file.close()
