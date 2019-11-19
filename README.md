# Full Stack Blog List App v1 :scroll:

This is a full stack blog list app with CRUD functionality. The database is hosted on MongoDB and the app is hosted on Heroku.


## Demo :computer:
You can find an online version of the app [here](https://bloglist-app-fso.herokuapp.com/) or by directly visiting https://bloglist-app-fso.herokuapp.com/

You can sign in using the following credentials:

__Username:__ Guest

__Password:__  guest


## Original repo of original app, where you can test etc. :file_folder:

https://github.com/iamkiko/fullstackopen-2019/tree/master/part7/bloglist-redux


## Built with _(Tech stack & dependencies)_ :wrench:

* __React__ with hooks: front-end rendering
* __Redux__: state management
* __Node.js__: server side operations
* __Express__: routing and middleware
* __Mongoose__: object data modelling to MongoDB (our database)
* __Webpack__: module bundling
* __Redux Thunk__: handling async actions
* __JSON Web Tokens__: token authentication
* __Jest__: unit testing
* __Cypress__: end-to-end testing
* __Material UI__: basic styling
* __Axios__: server requests and HTTP promises
* __Bcrypt__: password hashing
* __Body-parser__: parsing the request bodies of requests
* __Prettier__: to make everything… Uniform, readable and neat.
* __Heroku__: hosting


## Getting Started on your local machine :gear:
__NB:__ This repo is solely for the deployed version.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1. Visit & clone repo which has server and client - https://github.com/iamkiko/fullstackopen-2019/

> git clone https://github.com/iamkiko/fullstackopen-2019.git


2. Navigate to part7/bloglist-redux/ in your IDE


3. Install dependencies
> Npm install


4. Open server in it’s own terminal

> Npm run watch


5. Open client in it’s own terminal

> Npm start (will start webpack)



## Running the tests :checkered_flag:


### End to End using Cypress

In client > cypress > integration > blogapp.spec.js

1. Ensure you have cypress installed (should be fine if you ran npm install)


2. Write whichever tests you want and run them with:

> Npm run cypress:open


**NB:** The commented out tests will wipe the DB and start new tests from scratch, should you uncomment and run them.



### Unit tests using Jest

In client > src > App.test.js or any other .test.js file (you can create your own)


1. Ensure you have Jest installed (should be fine if you ran npm install)


2. Write whichever tests you want and run them:

> CI=true npm test

## Author
Christos Constantinides (https://github.com/iamkiko)

## Acknowledgements :pray:

- University of Helsinki for providing the Full Stack Open
- Houston Inc for providing the Full Stack Open
- Matti Luukainen (https://github.com/mluukkai) for curating the course
- Joni Salmi, Mikko Saari, Alexis Toromanov and Vlad Sadretinov for their incredible help with questions and debugging.
