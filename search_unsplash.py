import urllib.request
import json

def get_image(query):
    url = f"https://api.unsplash.com/search/photos?query={urllib.parse.quote(query)}&client_id=1d_hH4C1oB53I_2xQO4n1-X9K0vQ1C-J9y1v2d-X0Q8"
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['results']:
                return data['results'][0]['urls']['regular']
    except Exception as e:
        print(f"Error: {e}")
    return None

print("Telecom:")
print(get_image("telecom tower"))
