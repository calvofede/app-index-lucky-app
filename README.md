## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Restful API using NestJS.
This application allows register a user, login a user and retrieving user profile using JWT authentication.
Postman collection can be found in postman folder, collection and environment both must be imported.
	
## Technologies
Project is created with:
* NestJs
* Objection ORM
* SQLite3

## Setup
To run this project, install it locally using npm:

```
$ cd ../app-index-lucky-app
$ npm install
$ npm run db:setup
$ npm run start
```

### Important
npm run db:setup must be done prior npm run start because is to drop tables, create tables and seed City and Country tables with random fake data using faker library.

Login endpoint automatically set access_token(JWT token) variable in localhost environment, present in postman folder, that needs to be imported too.