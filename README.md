catch-o-the-day
=========

A simple express application that implements a basic API and hosted page for an SPA to record and view a fisherman's daily catches
 
Built using [Pug], [NodeJS], [Express], [MongoDb]

ES6 syntax support and tooling via [Babel]


## Download the code using Git

+ https://github.com/jdheywood/catch-o-the-day
+ `cd catch-o-the-day`

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

Yet to be released...