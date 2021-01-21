# Intro
this is a boilerplate for a webhook listener. 
i wanted to a webhook feature in an app. 

# Run
- 


Open two terminals and navigate to root directory 'Desktop/api_stuff' in both
1)  - run 'node index.js' in the cli  - make sure the port used matched the one in the next command
2)  - run 'ngrok http 8080  -host-header="localhost:8080"' to create a public tunnel 
	- Log into ngrok to view ngrok dashboard
	- in the ngrok dash, go to Tunnels and click on the URLS
	- watch the terminal or ngrok url web pages to debug