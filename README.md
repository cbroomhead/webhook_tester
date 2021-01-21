# Intro
this is a boilerplate for a webhook listener. 
i wanted to a webhook feature in an app. 


# Run
Open two terminals and navigate to root directory 'Desktop/api_stuff' in both
1)  - run 'node index.js' in the cli  - make sure the port used matched the one in the next command
2)  - run 'ngrok http 8080  -host-header="localhost:8080"' to create a public tunnel 
	- Log into ngrok to view ngrok dashboard
	- in the ngrok dash, go to Tunnels and click on the URLS
	- watch the terminal or ngrok url web pages to debug

Everything should work. 


# Use
Supposedly you can take the ngrok url and copy/paste in an app that can POST requests.
For example: https://xxxxxxxxxxxx.ngrok.io/hook where x are alphanumeric


Where this stand is I was able to successfully test a webhook coming from Bearer. 
https://app.bearer.sh/org/student-6/settings/notifications
The page above is where I entered a url while the server was up and the public tunnel was running. 
When i clicked 'Test' I got a json response as expected:
{
  api: {
    id: 'U2NlbmFyaW8tMjI3MA==',
    name: '[Name of API which triggered anomaly e.g. GitHub]'
  },
  incident: {
    id: 'SW5jaWRlbnQtNjkx',
    started_at: 1611191693,
    completed_at: 1611191993,
    complete: true,
    link: 'https://app.bearer.sh/anomalies'
  },
  rule: {
    id: 'UnVsZS0yMg==',
    name: '[Name of rule e.g. My Rule]',
    description: 'Consumption for API calls reaches 1 call over 5 mins',
    metric: 'request_count',
    call_type: 'api',
    comparison: 'value_up',
    threshold: 1,
    threshold_units: 'calls',
    period_in_mins: 5,
    link: 'https://app.bearer.sh/anomalies'
  },
  app: { id: 'QXBwbGljYXRpb24tMjU5MA==', name: 'Haida Gwaii Charlie' },
  environment: { name: '[Environment in which anomaly occurred]' }
}

