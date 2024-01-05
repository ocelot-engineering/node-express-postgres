# Minimum Example of Node.js, Express and PostgreSQL

The following is a minimal example of a backend application using Node.js, Express and PostgreSQL.

It may not look minimal at first glace, since the goal of this codebase is to provide a useful template that will scale nicely to small and mid size applications.

## Getting Started

1. Clone repo.
2. Immediately after cloning and before opening the project, create an [`.env` file](#creating-an-env-file) in the root directory.
3. Open project in devcontainer.
4. Run `npm start` in the terminal to [start the server](#starting-server) in development mode.

### Creating an .env File

If you're not concerned with security at this point and want some default configuration use the following:

```properties
POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_PORT=5432
POSTGRES_DB=api
POSTGRES_HOST=localhost
POSTGRES_REFRESH_DB_ON_LAUNCH=true
```

## Setting up the Database

The best way to setup the database is to allow the `postCreateCommand` of the devcontainer config to run.

**NOTE: `postCreateCommand` will only work if the [`.env` file](#creating-an-env-file) is present and correctly configured.**

The database setup will do the following:

-   create the database
-   create the tables
-   populate the tables

## Starting Server

### Dev

To start the server in development mode run `npm start` in the terminal. This uses `babel-node` to transpile and run.

### Prod

To start the server in prod mode run `npm run prod`.

## Testing the Server is Running

-   After running the server you should see a message in the console like `Listening on port 3000`.
-   You should also test using postman. Send a GET request to `localhost:3000/` and you should recieve a `json` response with `Hello World` in it.
