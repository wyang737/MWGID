import requests

URL = "http://3.17.77.198:5000/"
#URL = "http://localhost:5000/"
password = "UpdateApplicationXYZ123!!"

text = requests.get(URL, params={'password':password})
print(text.text)