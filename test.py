import requests 

url = "https://garvemodigum.github.io/garvmodigum/data.json" 
response = requests.get(url) 

if response.status_code == 200: 
    data = response.json() 
    print("Status:", data.get("status")) 
    print("Message:", data.get("message")) 
else: 
    print("Failed to fetch data:", response.status_code)