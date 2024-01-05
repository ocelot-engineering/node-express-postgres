# These commands can be used while in the postgres container.
# However, it is better practice to refresh the database by using the post-create.sh script.
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
