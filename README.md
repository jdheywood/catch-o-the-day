catch-o-the-day
=========

A simple express application that implements a basic API and hosted page for an SPA to record and view a fisherman's daily catches
 
Built using [Pug], [NodeJS], [Express], [MongoDb]

ES6 syntax support and tooling via [Babel]


## Download the code using Git

+ https://github.com/jdheywood/catch-o-the-day
+ `cd catch-o-the-day`

## Create your own `/config/secretConfig.json` file

Config settings used by the API that are deemed sensitive are hidden behind the `/src/utils/environment.js` module. 
This looks first for environment vars for the settings it needs then falls back to the secret config file. 
This is quite a nice pattern as it allows for quick changes during development and the protection of config data in production. 
As this repository is public the secretConfig file is gitignored, so you will need to add your own in the config folder.
 
It must have the following structure;

```json
{
  "dbConnection": {
    "protocol": "mongodb",
    "username": "your-username",
    "password": "your-password",
    "server": "host:port of your mongo server (I recommend mLabs.com sandbox)",
    "database": "your-database-name"
  },
  "sessionSecretKey": "your-secret-session-key",
  "slackWebHookUrl": "https://hooks.slack.com/services/your/webhook/url",
  "weather": {
    "apiKey": "your-api-key-here"
  }
}
```
Alternatively you can specify this data on the command line when you start your application, 
however there are more than a couple of settings which makes this prone to typos. 
I recommend you set up your own secretConfig file in the format specified above.


## How to run the app

+ Install dependencies using `npm install` command (locally, a node_modules directory will be created)
+ Start the dev server using the `npm start` command
+ Open [http://localhost:3030/](http://localhost:3030/) home page
+ Alternatively use `npm run build` to build the transpiled code (this is what will be deployed to the hosted environment)
+ Serve the built code locally using `npm run serve` to test the built app works as expected after transpilation via babel

## Run the tests
+ Run the tests using the `npm test` command
+ Run the test coverage report using the `npm run test:coverage` command 
(this runs the tests first, then creates the coverage report)
+ Open the file /catch-o-the-day/coverage/lcov-report/index.html in your preferred browser to view the test coverage report

## Documentation

+ Generate the docs using the `npm generate-docs` command
+ Open the file /catch-o-the-day/out/index.html in your preferred browser to view the generated docs

## Release History

v1.0.0 released 1st May 2017