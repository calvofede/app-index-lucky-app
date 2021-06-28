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
* Bcrypt

## Setup
To run this project, clone it first and install it locally using docker:

```
$ cd ../app-index-lucky-app
$ docker-compose up
```

### Important
Login endpoint automatically set access_token(JWT token) variable in localhost environment, present in postman folder, that needs to be imported too.