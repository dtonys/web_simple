## Overview
Foundation for non single page web site, using simple, reliable tools.

## Goals
* No front-end javascript frameworks
* Support arbitrary number of pages and layouts
* Client side templating for complex views
* Simple

## Tech
* JS:       jQuery, Lodash
* CSS:      SASS
* Assets:   Grunt
* Backend:  Express

## Start
start server, watch sass & livereload css, watch ejs templates
> npm run start

## Start
stop all running tasks
> npm run stop

## Frontend
Vendors are 3rd party js libraries
Layout wraps the page
Page has the content

Multiple pages and layouts can be implemented.

JS:
* Vendors - vendors.min.js
* Layout  - layout.min.js
* Page    - page_1.min.js

CSS:
* Layout  - layout.min.css
* Page    - page_1.min.css

## Backend
Follows standard MVC, such as that found in Ruby On Rails.

Routes go in routes.js
  * Routes can route to a Page or an API
  * Order of route matters
  * Router sends request to controller

Pages go in pagesController

APIs go in apiController
