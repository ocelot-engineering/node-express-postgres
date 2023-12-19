psql -U postgres

CREATE DATABASE api;

\c api

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
    VALUES ('Alice', 'alice@example.com'), ('Bob', 'bob@example.com');

\q