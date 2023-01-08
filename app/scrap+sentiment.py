# https://news.google.com/search?q=kohli


import requests
from bs4 import BeautifulSoup
from textblob import TextBlob


inp = input('Enter Name')
inpt = ""
for j in inp:
    if(j ==" "):
        inpt = inpt + "+"
    else:
        inpt = inpt + j
# print(inpt)



url = f"https://news.google.com/search?q={inpt}"
# print(url)
r = requests.get(url)
htmlContent = r.content

soup = BeautifulSoup(htmlContent, "html5lib")
# print(soup.prettify())

# print(soup.find_all( 'h3' ))
rough = soup.find_all(class_='ipQwMb ekueJc RD0gLb')

a=0
for i in rough:
    a+=1
    print(a)
    text = i.get_text()
    print(text)
    blob = TextBlob(text)
    print(blob.sentiment.polarity)
