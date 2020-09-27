# PyteachBack

- [PyteachBack](#pyteachback)
  * [Installation](#installation)
  * [Usage](#usage)
    + [Auth](#auth)
  * [Auteurs](#auteurs)

## Installation

Clone this repo !

Run `npm install` then `npm install` inside a terminal.

Tweak the `./.env` file :

```
PORT=4040
DB_NAME=pyteach
DB_USER=pyteach_user
DB_PORT=8889
DB_PASS=covid19
DB_HOST=localhost
```

Update the `./config/config.json` file with our MySQL databases informations :

```json
{
  "development": {
    "username": "pyteach_user",
    "password": "covid19",
    "database": "pyteach",
    "host": "127.0.0.1",
    "port": "8889",
    "dialect": "mysql"
  }
}

```

Start your MySQL server and then start the API via the command `npm test`or with the `node app.js` command.

That's All.

## Usage

### Auth

To register : POST http://localhost:4040/users/register

```json
{
    "firstName": "Jason",
    "lastName": "Patrick",
    "username": "username",
    "email": "mail@gmail.com",
    "password": "my-passwd"
}
```

To login : POST http://localhost:4040/users/login

```json
{
    "username": "jajson",
    "password": "my-super-secret-password"
}
```

 will return a user informations as well as a JWT token :

```json
{
    "id": 1,
    "firstName": "Jason",
    "lastName": "Patrick",
    "username": "username",
    "role": "STUDENT",
    "email": "randommail@gmail.com",
    "createdAt": "2020-09-26T15:22:05.000Z",
    "updatedAt": "2020-09-26T15:22:05.000Z",
    "token": "token"
}
```
### CRUD Table
Use apidoc command to generate the API Swagger : `apidoc -f "routes/.*\\.js$" -i ./  -o apidoc/`

## Auteurs

- Malha Ait Mohammed
- Lauraine Houraga
- Badis Meddouri

