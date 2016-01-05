# Contact Manager Assignment

## Overview

This application displays all contacts, user can add new contacts, edit or delete.
User can also search contacts by Name,Email and Phone.

## Prerequisites
### AngularJS
I've used AngularJS library, because of Application architecture is in AngularJS.

### Bower
Angular and it's dependancies has installed using bower

### Karma and Jasmine
Used Karma and Jasmine for unit testing.
- You can run the server unit testing via `karma start karma.conf.js`

### Node.js
I've used node to run Karma unit testing. Using Karma-Jasmine for unit testing here.
- Install the tool dependencies ('npm install').
- 


## Workings of the application

- The application filesystem layout structure is based on the single page application.
- There is no dynamic backend (no application server) for this application. We have used a static JSON file to read
  data.

### Installing dependencies

The application relies upon node.js tools, such as karma.  You can
install these by running:

node dependancy:
```
npm install karma
npm install karma-jasmine
npm install karma-chrome-launcher
```

Angular dependancy:
```
bower install angular
bower install angular-route
bower install angular-mocks
```

### Running the app during development

- You can run the server using python command Run `python -m SimpleHTTPServer 8000`
- Note: 8000 is the port number. You can change it.
- navigate your browser to `http://localhost:8000` to see the app running in your browser.

## Application Directory Layout

    bower_components    --> angularjs dependency files
    node_modules        --> node dependency files
    static              --> static files
        img                 --> Images
        js/             --> javascript files
            common/      --> common used scripts
            controllers/ --> controllers files
            directives/  --> directivess is there
            services/    --> services files
            module.js    --> module is here
            route.js     --> angularjs routing
        styles/              --> css files
        templates/           --> view files
    test/       --> unit testing files
    bower.json  --> bower dependancy configuration
    contacts.json   --> Contact JSON
    index.html      --> app layout file (the main html template file of the app)
    indexcss.html   --> all css files are here
    indexjs.html    --> all javascript files are here
    karma.conf.js   --> karma configuration to run unit testing
    package.json    --> node dependcies and project's description are here
    Readme.md   --> Application description
    

## Contact Me
- Dheeraj Jaiswal
- jdheeraj32@yahoo.com
- 9810550702

