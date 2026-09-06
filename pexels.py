import urllib.request
import re

url = "https://www.pexels.com/search/telecom%20tower/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        matches = re.findall(r'https://images\.pexels\.com/photos/[0-9]+/[^"]+', html)
        if matches:
            for m in list(set(matches))[:3]:
                print(m)
except Exception as e:
    pass
