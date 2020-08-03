const urlPSQL = process.env.DATABASE_URL;

let production = {
    "username": process.env.PSQL_USERNAME,
    "password": process.env.PSQL_PASSWORD,
    "database": process.env.PSQL_DATABASE,
    "host": process.env.PSQL_HOST || "127.0.0.1",
    "dialect": "postgres",
    "logging": false,
    "url": process.env.DATABASE_URL,
    "ssl": process.env.HEROKU ? true : false,
    "dialectOptions": process.env.HEROKU ? { "ssl": true } : {}
};


if (urlPSQL) {
  const PSQLCreds = urlPSQL.slice(11);
  console.log("pSQLCres", PSQLCreds);
  const splittedDataPSQL = PSQLCreds.split(':');

  const username = splittedDataPSQL[0];

  const splittedPassHost = splittedDataPSQL[1].split('@');
  const password = splittedPassHost[0];
  const host = splittedPassHost[1];

  const splittedHostDB = splittedDataPSQL[2].split('/');

  const port = splittedHostDB[0];
  const database = splittedHostDB[1];

  console.log("username", username);
  console.log("host", host);
  production = {
    ...production,
    username,
    password,
    database,
    host
  };
}

console.log(production);

const dataPSQL = {
  "development": {
    "username": process.env.PSQL_USERNAME,
    "password": process.env.PSQL_PASSWORD,
    "database": process.env.PSQL_DATABASE,
    "host": process.env.PSQL_HOST || "127.0.0.1",
    "dialect": "postgres",
    "logging": false,
    "url": process.env.DATABASE_URL,
  },
  "test": {
    "username": "postgres",  // hacky fix for test envs
    "password": "",
    "database": "test",
    "host": process.env.PSQL_HOST || "127.0.0.1",
    "dialect": "postgres",
    "logging": false
  },
  production
};


module.exports = dataPSQL;
